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
import { Link } from "react-router-dom";

const LibrarianDashboardReadersPage = () => {
  const [users, setUsers] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [updatingData, setUpdatingData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    dateOfBirth: '',
    readerImage: null,
  });
  const [open, setOpen] = useState(false);
  const [selectedUserIdToDelete, setSelectedUserIdToDelete] = useState(null);
  const token = localStorage.getItem('token')

  const handleClickOpen = () => {
    setOpen(true);
  };
  console.log(updatingData);

  const handleClose = () => {
    setOpen(false);
  };

  const getAllUsers = async () => {
      await axios.get(`${api_base_url}api/users`, {
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      })
      .then(response => {
        setUsers(response.data.data)
      })
      .catch(err => {
        console.log(err);
      })
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleEdit = (id) => {
    setEditMode(id);
  };

  const SetOneUser = async () => {
    await axios.get(api_base_url + "api/users")
      .then(res => {
        const info = res.data.data.find(e => e.id == editMode)
        setUpdatingData(info)
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    SetOneUser()
  }, [editMode])

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const GetOldImageIfNotSelected = updatingData.UserImage
    if (file == null) {
      setUpdatingData({ ...updatingData, GetOldImageIfNotSelected })
    }
    else {
      setUpdatingData({ ...updatingData, userImage: file });
    }
  };
  const handleUpdate = async (id) => {
    try {
      const formData = new FormData();
      formData.append("FirstName", updatingData.firstName);
      formData.append("LastName", updatingData.lastName);
      formData.append("Address", updatingData.address);
      formData.append("DateOfBirth", updatingData.dateOfBirth);
      if (updatingData.UserImage !== null) {
        formData.append("UserImage", updatingData.userImage);
      }

      await axios.put(`${api_base_url}api/Users/${id}`, formData);
      getAllUsers();
      setEditMode(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleCancelUpdate = () => {
    setEditMode(null);
    setUpdatingData({});
  };

  const handleDelete = async () => {
    if (selectedUserIdToDelete !== null) {
      try {
        // Make an API call to delete the user
        await axios.delete(`${api_base_url}api/Users/${selectedUserIdToDelete}`);

        // Close the dialog
        handleClose();

        // Refresh the list of users
        getAllUsers();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
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
              <th className="librarian_dashboard_details_size">Telefon raqami</th>
              <th className="librarian_dashboard_details_size">Manzili</th>
              <th className="librarian_dashboard_details_size">Ijaraga olgan kitoblari</th>
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
                <td className="librarian_dashboard_id_size">{user.id}</td>

                <td className="librarian_dashboard_image_size">
                  {editMode === user.id ? (<input className="librarian_dashboard_update_user_input" onChange={handleImageChange} type="file" accept="image/*" />) : (<img src={api_base_url + user.userImage} />)}
                </td>

                <td className="librarian_dashboard_fullname_size">
                  {editMode === user.id ? (<input className="librarian_dashboard_update_user_input" type="text" onChange={e => setUpdatingData({ ...updatingData, firstName: e.target.value })} defaultValue={user.firstName} />) : (user.firstName)}
                </td>

                <td className="librarian_dashboard_fullname_size">
                  {editMode === user.id ? (<input className="librarian_dashboard_update_user_input" type="text" onChange={e => setUpdatingData({ ...updatingData, lastName: e.target.value })} defaultValue={user.lastName} />) : (user.lastName)}
                </td>

                <td className="librarian_dashboard_details_size">
                  {user.phoneNumber}
                </td>
                <td className="librarian_dashboard_fullname_size">
                  {editMode === user.id ? (<input className="librarian_dashboard_update_user_input" type="text" onChange={e => setUpdatingData({ ...updatingData, address: e.target.value })} defaultValue={user.address} />) : (user.address)}
                </td>
                <td className="librarian_dashboard_details_size">
                  {user.borrowedBooks && user.borrowedBooks.length > 0 ? (<ul>{user.borrowedBooks.map(book => (<li key={book.id}>{book.bookTitle}</li>))}</ul>) : ("Ijaraga Kitob olmagan")}
                </td>

                <td className="librarian_dashboard_details_size">
                  {editMode === user.id ? (<input className="librarian_dashboard_update_user_input" type="date" onChange={e => setUpdatingData({ ...updatingData, dateOfBirth: e.target.value })} defaultValue={user.dateOfBirth}></input>) : user.dateOfBirth}
                </td>

                <td className="librarian_dashboard_fine_size">
                  {user.fineAmount}
                </td>
                <td >
                  <div className="librarian_dashboard_update_delete_button">
                    {editMode === user.id ? (
                      <>
                        <button onClick={() => handleUpdate(user.id)}>
                          <i className="fa-solid fa-check"></i>
                        </button>
                        <button onClick={handleCancelUpdate}>
                          <i className="fa-solid fa-times"></i>
                        </button>
                      </>
                    ) : (
                      <button onClick={() => handleEdit(user.id)}>
                        <i className="fa-solid fa-user-pen"></i>
                      </button>
                    )}
                    <React.Fragment>
                      <Button variant="outlined" onClick={() => { setSelectedUserIdToDelete(user.id); handleClickOpen(); }}><i class="fa-solid fa-trash"></i></Button>
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
                        <DialogContent><DialogContentText id="alert-dialog-description"> Ushbu kitobxonni rostdan ham o`chirmoqchimisiz?</DialogContentText></DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose}>Yo`q</Button>
                          <Button onClick={handleDelete} autoFocus>Ha</Button>
                        </DialogActions>
                      </Dialog>
                    </React.Fragment>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to={"/kutubxonachi/yangi-kitobxon"}>
        <Button
          className="librarian_dashboard_add_user_button"
          variant="outlined"
        >
          Kitobxon qo`shish
        </Button>
      </Link>
    </div>
  );
};

export default LibrarianDashboardReadersPage;
