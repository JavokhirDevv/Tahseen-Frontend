import React from "react";
import "./BookFilter.css";
const BookFilter = () => {
  return (
    <div className="bookfilter">
      <div className="book_sorting">
        <h1>Janrlar</h1>

        <div className="book_sorting_filter_cover">
          <div className="genre_cover">
            <input type="checkbox" />
            <h6>Ilmiy</h6>
          </div>

          <div className="genre_cover">
            <input type="checkbox" />
            <h6>Badiiy</h6>
          </div>

          <div className="genre_cover">
            <input type="checkbox" />
            <h6>Detektiv</h6>
          </div>

          <div className="genre_cover">
            <input type="checkbox" />
            <h6>Fantastik</h6>
          </div>

          <div className="genre_cover">
            <input type="checkbox" />
            <h6>Sarguzasht</h6>
          </div>
        </div>
      </div>

      <div className="book_sorting">
        <h1>Mualliflar</h1>

        <div className="book_sorting_filter_cover">
        
        <div className="genre_cover">
            <input type="checkbox"/>
            <h6>Aliser Navoiy</h6>
        </div>

        <div className="genre_cover">
            <input type="checkbox"/>
            <h6>Zahiriddin Muhammad Bobur</h6>

        </div>
        
        <div className="genre_cover">
            <input type="checkbox"/>
            <h6>Abdulla Qodiriy</h6>
        </div>

        <div className="genre_cover">
            <input type="checkbox"/>
            <h6>Oybek</h6>
        </div>

                
        <div className="genre_cover">
            <input type="checkbox"/>
            <h6>Aliser Navoiy</h6>
        </div>

        <div className="genre_cover">
            <input type="checkbox"/>
            <h6>Zahiriddin Muhammad Bobur</h6>

        </div>
        
        <div className="genre_cover">
            <input type="checkbox"/>
            <h6>Abdulla Qodiriy</h6>
        </div>

        <div className="genre_cover">
            <input type="checkbox"/>
            <h6>Oybek</h6>
        </div>

   
        </div>
      </div>
    </div>
  );
};

export default BookFilter;