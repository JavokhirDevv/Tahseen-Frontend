import React from "react";
import './AudioBookCard.css';
import audiobookImage from '../../../assets/imgs/BookCard/1.jpg'
import { Link } from "react-router-dom";

const AudioBookCard = ({audioBookCard}) => {
  if (!audioBookCard) {
    return null; // or some loading indicator
  }
  const {author} = audioBookCard;
  console.log("cardd");
  console.log(audioBookCard);
  const {narrator} = audioBookCard;
  return (
    <div className="audiobookcard">
      <div className="audiobookcard_image_cover">
        <img className="audiobookcard_image" src={audioBookCard.image} alt="Audiobook" />
      </div>
      <h2 className="audiobookcard_title">{audioBookCard.title}</h2>
      <p className="audiobookcard_author">Muallif: {author.firstName + " " + author.lastName}</p>
      <p className="audiobookcard_author">Suhandon: {narrator.firstName + " " + narrator.lastName}</p>
      <div className="audiobookcard_bookcard_button">
        <Link to={`/kitob/${audioBookCard.id}`} className="audiobookcard_button_cover">
          <button>Ko`proq</button>
        </Link>
      </div>
    </div>
  );
};

export default AudioBookCard;
