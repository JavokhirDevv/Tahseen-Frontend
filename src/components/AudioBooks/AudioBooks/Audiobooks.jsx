import React from 'react'
import './AudioBooks.css'
import AudioBookCard from '../../GeneralComponents/AudioBookCard/AudioBookCard'
import AudioBooksBar from '../AudioBooksBar/AudioBooksBar'
import AudioBooksList from '../AudioBooksList/AudioBooksList'
const Audiobooks = () => {
  return (
    <div className='audiobook'>
        <AudioBooksBar />
        <AudioBooksList />
    </div>
  )
}

export default Audiobooks