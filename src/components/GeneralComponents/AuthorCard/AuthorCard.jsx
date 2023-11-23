import React from "react";
import { Link } from "react-router-dom";
import api_base_url from "../../../configurations/Config";
import './AuthorCard.css'
const AuthorCard = ({authorData}) => {
  return (
    <div className='author_card'>
        <div className="author_card_image_cover">
        {authorData && <img src={api_base_url+authorData.authorImage} alt="" />}
        </div>
        <h3>{authorData.firstName + " " + authorData.lastName}</h3>
        <div className="author_card_button">
        <Link to={`/muallif/${authorData.id}`} className="librarycard_button_cover">
          <button>Ko`proq</button>
        </Link>
        </div>
    </div>
  );
};

export default AuthorCard;
