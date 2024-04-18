import React, { useState, useEffect } from "react";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {

  const [projects, setProjects] = useState([]);

 

  useEffect(() => {
    fetchProjects();
  }, []); // Run only once when the component mounts

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:5000/projects');
      setProjects(response.data.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };


  // delete project
  const handleDeleteProject = async (projectId) => {
    try {
      await axios.delete(`http://localhost:5000/projects/${projectId}`);
      // After successfully deleting the project on the backend, you can choose
      // to refetch the projects from the backend to update the state
      fetchProjects(); // Assuming fetchProjects updates the projects state
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };
  // Logout function
const handleLogout = () => {
  localStorage.removeItem("userInfo"); // Remove user information from localStorage
  // Redirect the user to the login page or any other appropriate page
  navigate("/login");
};

  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log("userInfo", userInfo);

    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate]);




  const [showEditModal, setShowEditModal] = useState(null);

  const handleEditClick = (index) => {
    setShowEditModal(index);
  };

  const handleCloseModal = () => {
    setShowEditModal(null);
  };
  const handleAddProjectClick = () => {
    setShowEditModal("add");
  };

  

  // Render the Dashboard content
  return (
    <div className="dashboard-container">
      <div className="dashboard-title">
        <div className="title-button-container">
        <h1>Dashboard Projects</h1>
        <button onClick={handleLogout}>Logout</button>
        </div>
        
      </div>
      <div className="dashboard-projects-container">
      <div className="dashboard-add-project">
          <div className="add-project-button">
          <button onClick={handleAddProjectClick}>Add Projects</button>

          </div>
          
        </div>
        <div className="dashboard-projects-card">
        {showEditModal === 'add' && (
                <div className="add-projects">
                  <div className="close-form-add-project">
                    <button onClick={handleCloseModal}>X</button>
                  </div>
                  <div className="form-add-project">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter name"
                    />
                    <input
                      type="text"
                      id="description"
                      name="description"
                      placeholder="Enter description"
                    />
                    <input
                      type="text"
                      id="link"
                      name="link"
                      placeholder="Enter link"
                    />
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                    />
                  </div>
                  <div className="save-form-add-project">
                    <button onClick={handleCloseModal}>
                      SAVE PROJECTS
                    </button>
                  </div>
                </div>
              )}
          {projects.map((card, index) => (
            <div key={card.id} className="dashboard-projects">
              
              <div className="project-card-image">
                <img src={card.image} alt="project" />
              </div>
              <div className="project-card-button">
              <button onClick={() => handleDeleteProject(card._id)}>
                  Delete project
                </button>
                <button onClick={() => handleEditClick(index)}>
                  Edit project
                </button>
              </div>
              {showEditModal === index && (
                <div className="edit-projects">
                  <div className="close-form">
                    <button onClick={handleCloseModal}>X</button>
                  </div>
                  <div className="edit-form">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter name"
                    />
                    <input
                      type="text"
                      id="description"
                      name="description"
                      placeholder="Enter description"
                    />
                    <input
                      type="text"
                      id="link"
                      name="link"
                      placeholder="Enter link"
                    />
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                    />
                  </div>
                  <div className="save-form">
                    <button onClick={handleCloseModal}>
                      SAVE UPDATE
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        
      </div>
    </div>
  );
}

export default Dashboard;
