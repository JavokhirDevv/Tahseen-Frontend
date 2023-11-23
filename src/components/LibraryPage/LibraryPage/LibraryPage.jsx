import React, { useEffect, useState } from "react";
import "./LibraryPage.css";
import img1 from "../../../assets/imgs/LibraryCard/1.png";
import TopBooks from "../../MainPage/TopBooks/TopBooks";
import { useParams } from "react-router-dom";
import axios from "axios";
import api_base_url from "../../../configurations/Config";

const LibraryPage = () => {
    const { id } = useParams();
    const [library, setLibrary] = useState([]); 
  
    const GetLibrary = async () => {
      await axios.get(`${api_base_url}api/LibraryBranch`)
      .then(response => {
        const foundLibrary = response.data.data.find((e) => e.id == id);
        if (foundLibrary) {
            setLibrary(foundLibrary); // Wrap the found book in an array
        } else {
          console.log(`Library with ID ${id} not found`);
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
  useEffect(() => {
    GetLibrary()
  }, [id])
  console.log(library);
  return (
    <div className="book-page-details">
      <div className="book-page-img">
        <img src={api_base_url+library.image} alt="" />
      </div>
      <div className="book-page-details-content">
        <h1>Kutubxona haqida Malumot</h1>
        <table className="book-details-table">
          <tbody>
            <tr>
              <td className="table-left-side">Kutubxona Nomi</td>
              <td>{library.name}</td>
            </tr>

            <tr>
              <td className="table-left-side">Manzili</td>
              <td>{library.address}</td>
            </tr>

            <tr>
              <td className="table-left-side">Telefon raqam</td>
              <td>{library.phoneNumber}</td>
            </tr>

            <tr>
              <td className="table-left-side">Ochilish vaqtlari</td>
              <td>{library.openingHours}</td>
            </tr>

          </tbody>
        </table>
      </div>
      <TopBooks />
    </div>
  );
};

export default LibraryPage;
