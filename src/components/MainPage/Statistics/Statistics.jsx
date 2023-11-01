import React from 'react'
import './Statistics.css'
import { IoLibrarySharp } from 'react-icons/io5';
import { FaBookReader } from 'react-icons/fa';
import { HiOutlineLibrary } from 'react-icons/hi';
import { FaPencilAlt } from 'react-icons/fa';
const Statistics = () => {
  return (
    <div className='statistics'>
        <div className="statistics_card_cover">
            <div className="statistics_card">
                <HiOutlineLibrary className='statistics_icon'/>
                <div className="statistics_card_text">
                    <h1>15+</h1>
                    <h5>Kutubxonalar</h5>
                </div>
            </div>
            <div className="statistics_card">
                <FaBookReader className='statistics_icon'/>
                <div className="statistics_card_text">
                    <h1>4000+</h1>
                    <h5>Kitobxonlar</h5>
                </div>
            </div>
            <div className="statistics_card">
               <IoLibrarySharp className='statistics_icon'/>
                <div className="statistics_card_text">
                    <h1>2000+</h1>
                    <h5>Kitoblar</h5>
                </div>
            </div>
            <div className="statistics_card">
               <FaPencilAlt className='statistics_icon'/>
                <div className="statistics_card_text">
                    <h1>100+</h1>
                    <h5>Mualliflar</h5>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Statistics