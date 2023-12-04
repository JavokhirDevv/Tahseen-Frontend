import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import api_base_url from '../configurations/Config';

export const TahseenApiControl = createContext();
const Context = ({children}) => {

  //librarian Data
  const [librarianData, setLibrarianData] = useState({});
  const getToken = localStorage.getItem("token");
  
  const GetLibrarianData = async () =>{
    await axios.get(api_base_url + "api/Librarian/me", {
      headers: {
        'Authorization': `Bearer ${getToken}`
      }
    })
      .then(response => {
        setLibrarianData(response.data.data);
      })
      .catch(error => {
        // Handle error, e.g., set an error state
        console.error('Error fetching librarian data:', error);
      });
  }

  useEffect(() => {
    GetLibrarianData()
  },[])



  return (
    <TahseenApiControl.Provider value={[librarianData, setLibrarianData]}>{children}</TahseenApiControl.Provider>
    )
}

export default Context