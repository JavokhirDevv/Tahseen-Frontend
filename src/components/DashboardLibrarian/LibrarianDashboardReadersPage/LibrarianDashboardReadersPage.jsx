import React, { useState, useEffect } from "react";
import "./LibrarianDashboardReadersPage.css";
import axios from "axios";
import api_base_url from "../../../configurations/Config";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const LibrarianDashboardReadersPage = () => {
  const [users, setUsers] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [initialImage, setInitialImage] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  const handleEdit = (id) => {
    console.log(id);
  };
  const handleUpdate = (id, initialImage) => {
    console.log(id, initialImage);
  };
  const handleDelete = async (id) => {
    try {
      await axios
        .delete(`${api_base_url}api/Users/${id}`)
      getAllUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
    setOpen(false);
  };

  return (
    <div className="librarian_dashboard_readers_page_button_cover">
      
      <div className="librarian_dashboard_readers_page">
        <table className="readers_table">
          <thead>
            <tr>
              <th className="librarian_dashboard_id_size">Id</th>
              <th className="librarian_dashboard_image_size">Kitobxon</th>
              <th className="librarian_dashboard_fullname_size">Ismi</th>
              <th className="librarian_dashboard_fullname_size">Familiyasi</th>
              <th className="librarian_dashboard_details_size">
                Telefon raqami
              </th>
              <th className="librarian_dashboard_details_size">Email</th>
              <th className="librarian_dashboard_details_size">
                Tug`ilgan sana
              </th>
              <th className="librarian_dashboard_fine_size">Jarima</th>
              <th className="librarian_dashboard_details_size">Tahrirlash</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td className="librarian_dashboard_id_size">{index + 1}</td>
                <td className="librarian_dashboard_image_size">
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
                <td className="librarian_dashboard_fullname_size">
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
                <td className="librarian_dashboard_fullname_size">
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
                <td className="librarian_dashboard_fine_size">
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
                <td className="librarian_dashboard_delete_button">
                  {editMode === user.id ? (
                    <button
                      onClick={() => handleUpdate(user.id, user.userImage)}
                    >
                      <i class="fa-solid fa-check"></i>
                    </button>
                  ) : (
                    <button onClick={() => handleEdit(user.id)}>
                      <i class="fa-solid fa-user-pen"></i>
                    </button>
                  )}

                  <React.Fragment>
                    <Button variant="outlined" onClick={handleClickOpen}>
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {""}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Ushbu kitobxonni rostdan ham o`chirmoqchimisiz?
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>Yo`q</Button>
                        <Button onClick={() => handleDelete(user.id)} autoFocus>
                          Ha
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </React.Fragment>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button
        className="librarian_dashboard_add_user_button"
        variant="outlined"
      >
        Kitobxon qo`shish
      </Button>
    </div>
  );
};

export default LibrarianDashboardReadersPage;
