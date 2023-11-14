import React from "react";
import "./BookBar.css";
const BookBar = () => {
  return (
    <div className="bookbar">
      <div className="flex items-center justify-center p-5">
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
      </div>

      <div className="bookbar_filter">
        <select className="bookbar_filter-select">
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
        </select>

        <select className="bookbar_filter-select">
          <option value="" disabled selected hidden>
            Kutubxonalar
          </option>
          <option value="non-fiction">Alisher Navoiy</option>
          <option value="non-fiction">Milliy kutubxona</option>
          <option value="non-fiction">
            Zahiriddin Muhammad Bobur kutubxona
          </option>
        </select>

        <select className="bookbar_filter-select">
          <option value="" disabled selected hidden>
            Til
          </option>
          <option value="non-fiction">Arab Tili</option>
          <option value="fiction">O`zbek tili</option>
          <option value="mystery">Ingliz tili</option>
          <option value="sci-fi">Rus tili</option>
        </select>
      </div>
    </div>
  );
};

export default BookBar;
