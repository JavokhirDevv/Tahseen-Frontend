import React, { useEffect, useState } from 'react'
import './AudioBooksList.css'
import AudioBookCard from '../../GeneralComponents/AudioBookCard/AudioBookCard'
import axios from 'axios';
const AudioBooksList = () => {
  const [audioBook, setAudioBook] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7020/api/audiobooks").then(e => setAudioBook(e.data.data))
  }, [])

  console.log(audioBook);
  return (
    <div className='audioBookList'>
        {
          audioBook.map((value) => {
            return(
              <AudioBookCard audioBookCard={value} />
            )
          })
        }
    </div>
  )
}

export default AudioBooksList