import React, { useEffect, useState } from "react";
import "./AudioBookPage.css";
import AudioBookPageHeader from "../AudioBookPageHeader/AudioBookPageHeader";
import axios from "axios";
import { useParams } from "react-router-dom";
import api_base_url from "../../../configurations/Config";

const AudioBookPage = () => {
  const { id } = useParams();
  const [audioBook, setAudioBook] = useState({ audioFiles: [] });
  const getAudioBook = async () => {
    try {
      const response = await axios.get(`${api_base_url}api/audioBooks`);
      const info = response.data.data.find((a) => a.id == id);
      if (info) {
        setAudioBook(info);
      } else {
        console.log(`AudioBook with ID ${id} not found`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(audioBook.audioFiles);
  useEffect(() => {
    getAudioBook();
  }, [id]);

  return (
    <div className="audio_book_page">
      <AudioBookPageHeader audioBook={audioBook} />
      {audioBook.audioFiles.map((value) => (
        <audio key={value.id} controls src={api_base_url+value.filePath} className="audio_book_player"></audio>
      ))}
    </div>
  );
};

export default AudioBookPage;
