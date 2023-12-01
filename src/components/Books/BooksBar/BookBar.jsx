import React from "react";
import "./BookBar.css";

const BookBar = () => {
  return (
    <div className="bookbar">
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Qidiring" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Qidirish</button>
      </form>

      <div className="bookbar_filter">
        {/* <select className="bookbar_filter-select">
          <option value="" disabled selected hidden>
            Viloyat
          </option>
          <option value="non-fiction">Andijon</option>
          <option value="non-fiction">Buxoro</option>
          <option value="non-fiction">Toshkent</option>
          <option value="non-fiction">Samarqand</option>
          <option value="non-fiction">Qashqadaryo</option>
          <option value="non-fiction">Farg`ona</option>
          <option value="non-fiction">Namangan</option>
          <option value="non-fiction">Xorazm</option>
          <option value="non-fiction">Jizzax</option>
        </select> */}
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

        {/* <select className="bookbar_filter-select">
          <option value="" disabled selected hidden>
            Kutubxonalar
          </option>
          <option value="non-fiction">Alisher Navoiy</option>
          <option value="non-fiction">Milliy kutubxona</option>
          <option value="non-fiction">
            Zahiriddin Muhammad Bobur kutubxona
          </option>
        </select> */}
        
        <div class="dropdown">
          <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Kutubxonalar
          </a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a class="dropdown-item" href="#">Alisher Navoiy</a></li>
            <li><a class="dropdown-item" href="#">Milliy kutubxona</a></li>
            <li><a class="dropdown-item" href="#">Zamin kutubxonasi</a></li>
            <li><a class="dropdown-item" href="#">Azon kutubxonasi</a></li>
            <li><a class="dropdown-item" href="#">Novza kutubxonasi</a></li>
          </ul>
        </div>

        {/* <select className="bookbar_filter-select">
          <option value="" disabled selected hidden>
            Til
          </option>
          <option value="non-fiction">Arab Tili</option>
          <option value="fiction">O`zbek tili</option>
          <option value="mystery">Ingliz tili</option>
          <option value="sci-fi">Rus tili</option>
        </select> */}
        <div class="dropdown">
          <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Til
          </a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a class="dropdown-item" href="#">O'zbek tili</a></li>
            <li><a class="dropdown-item" href="#">Arab tili</a></li>
            <li><a class="dropdown-item" href="#">Ingliz tili</a></li>
            <li><a class="dropdown-item" href="#">Rus tili</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookBar;
