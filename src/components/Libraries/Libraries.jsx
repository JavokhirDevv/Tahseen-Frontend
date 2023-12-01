import React, { useEffect, useState } from "react";
import "./Libraries.css";
import LibraryCard from "../GeneralComponents/LibraryCard/LibraryCard";
import axios from "axios";
import api_base_url from "../../configurations/Config";
const Libraries = () => {
  const [libraries, setLibraries] = useState([])
  var GetAllLibraries = async () =>{
    await axios.get(`${api_base_url}api/LibraryBranch`)
    .then(l => setLibraries(l.data.data))
    .catch(err => console.log(err))
  }
  useEffect(() =>{
    GetAllLibraries();
  }, [])
  console.log(libraries);
  return (
    <div className="library">
        {/* <div className="flex items-center justify-center p-5">
          <div className="rounded-lg bg-gray-200 p-3">
            <div className="flex">
              <div className="flex w-20 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="pointer-events-none absolute w-5 fill-gray-500 transition"
                >
                  <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                </svg>
              </div>
              <input
                type="text"
                className="w-full max-w-[560px] bg-white pl-2 text-base font-semibold outline-0"
                placeholder=""
                id=""
              />
              <input
                type="button"
                value="Search"
                className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
              />
            </div>
          </div>
        </div> */}
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Qidiring" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Qidirish</button>
        </form>

        <div className="library_filter">
            <h1>O`zbekistondagi ommaviy kutubxonalar</h1>
            <div class="dropdown">
              <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Viloyatlar
              </a>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="#">Andijon</a></li>
                <li><a class="dropdown-item" href="#">Buxoro</a></li>
                <li><a class="dropdown-item" href="#">Toshkent</a></li>
                <li><a class="dropdown-item" href="#">Samarqand</a></li>
                <li><a class="dropdown-item" href="#">Qashqadaryo</a></li>
                <li><a class="dropdown-item" href="#">Farg`ona</a></li>
                <li><a class="dropdown-item" href="#">Namangan</a></li>
                <li><a class="dropdown-item" href="#">Xorazm</a></li>
                <li><a class="dropdown-item" href="#">Jizzax</a></li>
                <li><a class="dropdown-item" href="#">Surxondaryo</a></li>
                <li><a class="dropdown-item" href="#">Sirdaryo</a></li>
                <li><a class="dropdown-item" href="#">Toshkent viloyati</a></li>
              </ul>
           </div>
        </div>

        {/* <div className="library-img">
          <img src={pic} alt="library" className="first-img"/>
          <img src={pic} alt="library"/>
          <img src={pic} alt="library" className="third-img"/>
          <img src={pic} alt="library" className="fourth-img"/>
        </div> */}

        <div className="library_cards_cover">
          {
            libraries.map(LibraryData => {
              return(
                <LibraryCard LibraryData={LibraryData}/>
              )
            })
          }
        </div>
    </div>
  );
};

export default Libraries;
