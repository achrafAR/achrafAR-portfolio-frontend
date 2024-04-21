import React, { useState, useEffect } from "react";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    link: "",
    image: null,
  });

  useEffect(() => {
    fetchProjects();
  }, []); // Run only once when the component mounts

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:5000/projects");
      setProjects(response.data.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  // delete project
  const handleDeleteProject = async (projectId) => {
    try {
      // Show confirmation toast and wait for user input
      const confirm = await new Promise((resolve, reject) => {
        const toastId = toast.dark(
          <div>
            <p>Are you sure you want to delete this project?</p>
            <button onClick={() => resolve(true)}>Yes</button>
            <button onClick={() => { resolve(false); toast.dismiss(toastId); }}>No</button>
          </div>,
          {
            autoClose: false,
            onClose: () => resolve(false),
          }
        );
      });
  
      // If user confirms deletion
      if (confirm) {
        // Delete project
        await axios.delete(`http://localhost:5000/projects/${projectId}`);
        fetchProjects(); // Fetch projects after deletion
  
        // Dismiss confirmation toast
        toast.dismiss();
  
        // Show toast notification after project deletion
        toast.success('Project deleted successfully!');
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      // Show error toast if deletion fails
      toast.error('Failed to delete project');
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
    const projectToEdit = projects[index];

    setFormData({
      name: projectToEdit.name,
      description: projectToEdit.description,
      link: projectToEdit.link,
      image: null, // Assuming you don't want to show the image in the edit form
    });
  };

  const handleCloseModal = () => {
    setShowEditModal(null);
  };
  const handleAddProjectClick = () => {
    setShowEditModal("add");
    setFormData({
      name: "",
      description: "",
      link: "",
      image: null,
    });
  };

  // add project

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleUpdateProject = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("link", formData.link);
      formDataToSend.append("image", formData.image);

      // Assuming you have the projectId of the project being edited
      const projectId = projects[showEditModal]._id;

      await axios.put(
        `http://localhost:5000/projects/${projectId}`,
        formDataToSend
      );

      handleCloseModal();
      fetchProjects();
      toast.success("Project updated successfully!"); // Use toast.success instead of alert
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  const handleAddProject = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("link", formData.link);
      formDataToSend.append("image", formData.image);

      await axios.post("http://localhost:5000/projects", formDataToSend);

      handleCloseModal();
      fetchProjects();
      toast.success("Project added successfully!"); // Use toast.success instead of alert
    } catch (error) {
      console.error("Error adding project:", error);
    }
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
          {showEditModal === "add" && (
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
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Enter description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  id="link"
                  name="link"
                  placeholder="Enter link"
                  value={formData.link}
                  onChange={handleInputChange}
                />
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              <div className="save-form-add-project">
                <button onClick={handleAddProject}>SAVE PROJECTS</button>
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
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      id="description"
                      name="description"
                      placeholder="Enter description"
                      value={formData.description}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      id="link"
                      name="link"
                      placeholder="Enter link"
                      value={formData.link}
                      onChange={handleInputChange}
                    />
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="save-form">
                    <button onClick={handleUpdateProject}>SAVE UPDATE</button>
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
