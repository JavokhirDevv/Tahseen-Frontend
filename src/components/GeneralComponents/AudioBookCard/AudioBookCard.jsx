import React from "react";
import './AudioBookCard.css';
import audio1 from '../../../assets/audio/audio1.mp3';
import audiobookImage from '../../../assets/imgs/BookCard/1.jpg'

const AudioBookCard = () => {
  return (
    <div className="audiobookcard">
      <div className="audiobookcard_image_cover">
        <img className="audiobookcard_image" src={audiobookImage} alt="Audiobook" />
      </div>
      <h2 className="audiobookcard_title">Who will cry when you die</h2>
      <p className="audiobookcard_author">Muallif: Robin Sharma</p>
      <p className="audiobookcard_author">Suhandon: Abdukarim Mirzayev</p>
      {/* <audio className="audiobookcard_audio-player" controls controlsList="nodownload">
        <source src={audio1} type="audio/mpeg" />
      </audio> */}
    </div>
  );
};

export default AudioBookCard;
