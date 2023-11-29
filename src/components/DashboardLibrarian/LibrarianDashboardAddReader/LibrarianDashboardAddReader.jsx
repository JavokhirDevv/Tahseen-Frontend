import React, { useState } from 'react';
import './LibrarianDashboardAddReader.css';
import { InputAdornment, TextField, Button, DialogContent, DialogContentText, DialogTitle, Dialog, DialogActions } from '@mui/material';
import axios from 'axios';
import api_base_url from '../../../configurations/Config';

const LibrarianDashboardAddReader = () => {
    const [newReader, setNewReader] = useState({
        FirstName: '',
        LastName: '',
        EmailAddress: '',
        Password: '',
        PhoneNumber: '',
        Address: '',
        DateOfBirth: '',
        ReaderImage: null, // Initialize as null
        LibraryBranchId: '',
    });
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        if (newReader.DateOfBirth == '') 
        {
            console.log('All fields must be filled');
        }
        else {
            setOpen(true);
        }
    };


    const handleClose = () => {
        setOpen(false);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setNewReader({ ...newReader, ReaderImage: file });
    };

    const handleAddUser = async () => {
        const formData = new FormData();
        formData.append('FirstName', newReader.FirstName);
        formData.append('LastName', newReader.LastName);
        formData.append('EmailAddress', newReader.Email);
        formData.append('Password', newReader.Password);
        formData.append('PhoneNumber', newReader.PhoneNumber);
        formData.append('Address', newReader.Address);
        formData.append('DateOfBirth', newReader.DateOfBirth);
        formData.append('LibraryBranchId', newReader.LibraryBranchId);
        setOpen(false);

        // Append the file if it exists
        if (newReader.ReaderImage) {
            formData.append('UserImage', newReader.ReaderImage);
        }

        try {
            const response = await axios.post(api_base_url + 'api/users', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            alert('Data has been added');
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }

    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create FormData and append form data

    };

    return (
        <div className="librarian_dashboard_add_reader">
            <form onSubmit={handleSubmit}>
                <TextField required onChange={e => setNewReader({ ...newReader, FirstName: e.target.value })} className='librarian_dashboard_add_reader_input' id="outlined-basic" label="Ismi" type='text' variant="outlined" />
                <TextField required onChange={e => setNewReader({ ...newReader, LastName: e.target.value })} className='librarian_dashboard_add_reader_input' id="outlined-basic" label="Familiyasi" type='text' variant="outlined" />
                <TextField required onChange={e => setNewReader({ ...newReader, Email: e.target.value })} className='librarian_dashboard_add_reader_input' id="outlined-basic" label="Email" type='email' variant="outlined" />
                <TextField required onChange={e => setNewReader({ ...newReader, Password: e.target.value })} className='librarian_dashboard_add_reader_input' id="outlined-basic" label="Parol" type='password' variant="outlined" />
                <TextField required onChange={e => setNewReader({ ...newReader, LibraryBranchId: e.target.value })} className='librarian_dashboard_add_reader_input' id="outlined-basic" label="LibraryBranchId" type='number' variant="outlined" />
                <TextField required onChange={e => setNewReader({ ...newReader, PhoneNumber: e.target.value })} className='librarian_dashboard_add_reader_input'
                    label="Telefon raqami"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    type='number'
                    InputProps={{
                        startAdornment: <InputAdornment position="start">+998</InputAdornment>,
                    }}
                />
                <br />
                <TextField required onChange={e => setNewReader({ ...newReader, Address: e.target.value })} className='librarian_dashboard_add_reader_input' id="outlined-basic" type='text' label="Yasash manzili" variant="outlined" />
                <TextField required onChange={e => setNewReader({ ...newReader, DateOfBirth: e.target.value })} className='librarian_dashboard_add_reader_input' id="outlined-basic" type='date' label="" variant="outlined" />
                <TextField required
                    onChange={handleImageChange}
                    className="librarian_dashboard_add_reader_input"
                    id="outlined-basic"
                    label=""
                    variant="outlined"
                    type="file"
                />
                <br />
                <React.Fragment>
                    <Button type='submit' onClick={handleClickOpen} className="librarian_dashboard_add_user_button" variant="outlined">
                        Kitobxon qo`shish
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{""}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Ushbu kitobxonni rostdan ham qo`shmoqchimisiz?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Yo`q</Button>
                            <Button name="submit" onClick={() => handleAddUser()} autoFocus>
                                Ha
                            </Button>
                        </DialogActions>
                    </Dialog>

                </React.Fragment>


            </form>
        </div>
    );
};

export default LibrarianDashboardAddReader;
