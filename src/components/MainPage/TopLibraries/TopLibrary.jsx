import React from 'react'
import './TopLibrary.css'
import LibraryCard from '../LibraryCard/LibraryCard'
const TopLibrary = () => {
  return (
    <div className='top_library'>
        <h1>TOP KUTUBXONALAR</h1>
        <div className="top_library_slider">
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
        </div>
    </div>
  )
}

export default TopLibrary