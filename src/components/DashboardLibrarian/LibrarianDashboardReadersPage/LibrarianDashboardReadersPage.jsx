import React from 'react';
import './LibrarianDashboardReadersPage.css';
import img1 from '../../../assets/imgs/usercard/1.jpg';

const LibrarianDashboardReadersPage = () => {
  const tableData = [
    {
      id: 1,
      userImage: img1,
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '+123456789',
      address: '123 Main St, City',
      dateOfBirth: '1990-01-01',
      fineAmount: '$10.00',
      borrowedBooks: 'Boburnoma',
    },
    {
      id: 1,
      userImage: img1,
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '+123456789',
      address: '123 Main St, City',
      dateOfBirth: '1990-01-01',
      fineAmount: '$10.00',
      borrowedBooks: 'Boburnoma',
    },
    {
      id: 1,
      userImage: img1,
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '+123456789',
      address: '123 Main St, City',
      dateOfBirth: '1990-01-01',
      fineAmount: '$10.00',
      borrowedBooks: 'Boburnoma',
    },
    {
      id: 1,
      userImage: img1,
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '+123456789',
      address: '123 Main St, City',
      dateOfBirth: '1990-01-01',
      fineAmount: '$10.00',
      borrowedBooks: 'Boburnoma',
    },
    {
      id: 1,
      userImage: img1,
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '+123456789',
      address: '123 Main St, City',
      dateOfBirth: '1990-01-01',
      fineAmount: '$10.00',
      borrowedBooks: 'Boburnoma',
    },
    // Add more data as needed
  ];

  const handleEdit = (id) => {
    // Add logic for edit action
    console.log(`Edit user with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Add logic for delete action
    console.log(`Delete user with ID: ${id}`);
  };

  return (
    <div className='librarian_dashboard_readers_page'>
      <table className='readers_table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Kitobxon</th>
            <th className='librarian_dashboard_details_size'>Ismi</th>
            <th className='librarian_dashboard_details_size'>Familiyasi</th>
            <th>Telefon raqami</th>
            <th>Manzil</th>
            <th>Tug`ilgan sanasi</th>
            <th className='librarian_dashboard_fine'>Jarima miqdori</th>
            <th className='librarian_dashboard_borrow_books'>Ijaraga olingan kitoblar</th>
            <th>Tahrirlash</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((reader, index) => (
            <tr key={reader.id}>
              <td>{index + 1}</td>
              <td className='librarian_dashboard_user_image'>
                <img src={reader.userImage} alt={`User ${reader.id}`} />
              </td>
              <td className='librarian_dashboard_details_size'>{reader.lastName}</td>
              <td className='librarian_dashboard_details_size'>{reader.firstName}</td>
              <td className='librarian_dashboard_details_size'>{reader.phoneNumber}</td>
              <td className='librarian_dashboard_details_size'>{reader.address}</td>
              <td className='librarian_dashboard_details_size'>{reader.dateOfBirth}</td>
              <td className='librarian_dashboard_fine'>{reader.fineAmount}</td>
              <td className='librarian_dashboard_borrow_books'>{reader.borrowedBooks}</td>
              <td>
                <button onClick={() => handleEdit(reader.id)}>Tahrirlash</button>
                <button onClick={() => handleDelete(reader.id)}>O`chirish</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LibrarianDashboardReadersPage;
