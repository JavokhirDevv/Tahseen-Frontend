import React, { useEffect, useState } from "react";
import "./TopBooks.css";
import BookCard from "../../GeneralComponents/BookCard/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
// Remove the import for booksMockData, as it's not needed

const TopBooks = () => {
  const [books, setBooks] = useState([]); // Initialize books as an empty array

  useEffect(() => {
    fetch("https://localhost:7020/api/Books")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBooks(data.data); // Set books to the array under the 'data' property
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <div className="topbooks">
      <h1>Eng ko`p o`qilgan kitoblar</h1>
      <div className="Slider">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {books.map((value) => (
            <SwiperSlide key={value.id}>
              <BookCard value={value} />
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </div>
  );
};

export default TopBooks;
