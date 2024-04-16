import React, { useState, useEffect } from "react";
import "./dashboard.css";
import imageProject from "../../Images/aboutMe-photo.avif";
import { useNavigate } from "react-router-dom";

function Dashboard() {

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

  const projectsCard = [
    {
      id: 1,
      image: imageProject,
      name: "achraf",
      description: "achraf al rachini",
    },
    {
      id: 2,
      image: imageProject,
      name: "achraf",
      description: "achraf al rachini",
    },
    {
      id: 3,
      image: imageProject,
      name: "achraf",
      description: "achraf al rachini",
    },
    {
      id: 4,
      image: imageProject,
      name: "achraf",
      description: "achraf al rachini",
    },
  ];

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
          {projectsCard.map((card, index) => (
            <div key={card.id} className="dashboard-projects">
              
              <div className="project-card-image">
                <img src={card.image} alt="project" />
              </div>
              <div className="project-card-button">
                <button>Delete project</button>
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
