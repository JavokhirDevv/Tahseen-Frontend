import React from "react";
import "./RelatedBookCard.css";
import img1 from "../../../assets/imgs/BookCard/1.jpg";
const RelatedBookCard = () => {
  return (
    <div className="relatedbookcard">
      <div className="relatedbookcard_img">
        <img src={img1} alt="" />
      </div>
      <div className="relatedbookcard_text">
        <h4>Who will cry when You die</h4>
        <h5><font>Muallif:</font> Robin Sharma</h5>
        <h5><font>Janr:</font> Ilmiy</h5>
        <h5><font>Mavjud:</font> 43</h5>
        <h5><font>Kutubxona:</font> Zahiriddin MuhammadBobur</h5>
        <div className="relatedbookcard_text_icon_and_button_cover">
        <span>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </span>
        <button>Ko`proq</button>
        </div>
      </div>
    </div>
  );
};

export default RelatedBookCard;