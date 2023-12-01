import React from "react";
import "./BookFilter.css";

const BookFilter = () => {
  return (
    <div className="bookfilter">
      <div className="book_sorting">
        <h1>Janrlar</h1>

        <div className="book_sorting_filter_cover">
        <div className="genre_cover">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Ilmiy
            </label>
        </div>
        <br/>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Badiiy
            </label>
        </div>
        <br/>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Detektiv
            </label>
        </div>
        <br/>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Fantastik
            </label>
        </div>
        <br/>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Sarguzasht
            </label>
        </div>
        <br/>
        
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Komediya
            </label>
        </div>
        <br/>

        </div>
        </div>


{/* 
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
        </div> */}
      </div>

      <div className="book_sorting">
        <h1>Mualliflar</h1>

        {/* <div className="book_sorting_filter_cover">
        
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

   
        </div> */}
        <div className="book_sorting_filter_cover">
        <div className="genre_cover">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Asqad Muxtor
            </label>
        </div>
        <br/>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Xudoyberdi Toʻxtaboyev
            </label>
        </div>
        <br/>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Abdulla Qodiriy
            </label>
        </div>
        <br/>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
               Oybek
            </label>
        </div>
        <br/>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              O'tkir Hoshimov
            </label>
        </div>
        <br/>
        
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Cho'lpon
            </label>
        </div>
        <br/>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              Said Ahmad
            </label>
        </div>
        <br/>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
              G'ofur G'ulom
            </label>
        </div>

        </div>
        </div>
      </div>
    </div>
  );
};

export default BookFilter;
