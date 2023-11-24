import React, { useState, useEffect } from "react";
import "./LibrarianDashboardReadersPage.css";
import axios from "axios";
import api_base_url from "../../../configurations/Config";

const LibrarianDashboardReadersPage = () => {
  const [users, setUsers] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [initialImage, setInitialImage] = useState(null);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(`${api_base_url}api/users`);
      setUsers(response.data.data || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleEdit = (id, initialImage) => {
    setEditMode(id);
    setInitialImage(initialImage);
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${api_base_url}api/Users/${id}`);
      getAllUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const updatedUser = {
        firstName: document.getElementById(`firstName-${id}`).value,
        lastName: document.getElementById(`lastName-${id}`).value,
        phoneNumber: document.getElementById(`phoneNumber-${id}`).value,
        emailAddress: document.getElementById(`emailAddress-${id}`).value,
        dateOfBirth: document.getElementById(`dateOfBirth-${id}`).value,
        fineAmount: document.getElementById(`fineAmount-${id}`).value,
        // Add other fields as needed
      };

      // Handle file input separately
      const userImageInput = document.getElementById(`userImage-${id}`);
      if (userImageInput.files.length > 0) {
        updatedUser.userImage = userImageInput.files[0];
      } else {
        // If no new image is selected, use the initial image value
        updatedUser.userImage = initialImage;
      }

      const formData = new FormData();
      for (const key in updatedUser) {
        formData.append(key, updatedUser[key]);
      }

      await axios.put(`${api_base_url}api/Users/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setEditMode(null);
      setInitialImage(null); // Clear initial image after update
      getAllUsers();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  
  return (
    <div className="librarian_dashboard_readers_page">
      <table className="readers_table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Kitobxon</th>
            <th className="librarian_dashboard_details_size">Ismi</th>
            <th className="librarian_dashboard_details_size">Familiyasi</th>
            <th className="librarian_dashboard_details_size">Telefon raqami</th>
            <th className="librarian_dashboard_details_size">Email</th>
            <th className="librarian_dashboard_details_size">Tug`ilgan sana</th>
            <th className="librarian_dashboard_details_size">Jarima</th>
            <th>Tahrirlash</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td className="librarian_dashboard_details_size">
                {editMode === user.id ? (
                  <input
                    type="file"
                    id={`userImage-${user.id}`}
                    accept="image/*"
                  />
                ) : (
                  <img src={api_base_url + user.userImage} alt="" />
                )}
              </td>
              <td className="librarian_dashboard_details_size">
                {editMode === user.id ? (
                  <input
                    type="text"
                    id={`firstName-${user.id}`}
                    defaultValue={user.firstName}
                  />
                ) : (
                  user.firstName
                )}
              </td>
              <td className="librarian_dashboard_details_size">
                {editMode === user.id ? (
                  <input
                    type="text"
                    id={`lastName-${user.id}`}
                    defaultValue={user.lastName}
                  />
                ) : (
                  user.lastName
                )}
              </td>
              <td className="librarian_dashboard_details_size">
                {editMode === user.id ? (
                  <input
                    type="text"
                    id={`phoneNumber-${user.id}`}
                    defaultValue={user.phoneNumber}
                  />
                ) : (
                  user.phoneNumber
                )}
              </td>
              <td className="librarian_dashboard_details_size">
                {editMode === user.id ? (
                  <input
                    type="text"
                    id={`emailAddress-${user.id}`}
                    defaultValue={user.emailAddress}
                  />
                ) : (
                  user.emailAddress
                )}
              </td>
              <td className="librarian_dashboard_details_size">
                {editMode === user.id ? (
                  <input
                    type="text"
                    id={`dateOfBirth-${user.id}`}
                    defaultValue={user.dateOfBirth}
                  />
                ) : (
                  user.dateOfBirth
                )}
              </td>
              <td className="librarian_dashboard_details_size">
                {editMode === user.id ? (
                  <input
                    type="text"
                    id={`fineAmount-${user.id}`}
                    defaultValue={user.fineAmount}
                  />
                ) : (
                  user.fineAmount
                )}
              </td>
              <td>
                {editMode === user.id ? (
                  <button onClick={() => handleUpdate(user.id, user.userImage)}>
                    Saqlash
                  </button>
                ) : (
                  <button onClick={() => handleEdit(user.id)}>
                    Tahrirlash
                  </button>
                )}
                <button onClick={() => handleDelete(user.id)}>O`chirish</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LibrarianDashboardReadersPage;
