import React from 'react'
import './AudioBooks.css'
import AudioBookCard from '../../GeneralComponents/AudioBookCard/AudioBookCard'
import AudioBooksBar from '../AudioBooksBar/AudioBooksBar'
const Audiobooks = () => {
  return (
    <div className='audiobook'>
        <AudioBooksBar />
        <AudioBookCard />
    </div>
  )
}

export default Audiobooks