import React from 'react'
import './LibraryCard.css'
import { Link } from 'react-router-dom'
import api_base_url from '../../../configurations/Config'
const LibraryCard = ({LibraryData}) => {
  return (
    <div className='library_card'>
        <div className="library_card_image_cover">
        {LibraryData && <img src={api_base_url+"/"+LibraryData.image} alt="" />}
        </div>
        <h3>{LibraryData.name}</h3>
        <p><i className="fa-solid fa-location-dot"></i> Manzil: <font>{LibraryData.address}</font></p>
        <p><i className="fa-solid fa-phone"></i> Telefon raqam: <font>{LibraryData.phoneNumber}</font></p>
        <div className="library_card_button">
        <Link to={`/kutubxona/${LibraryData.id}`} className="librarycard_button_cover">
          <button>Ko`proq</button>
        </Link>
        </div>
    </div>
  )
}

export default LibraryCard