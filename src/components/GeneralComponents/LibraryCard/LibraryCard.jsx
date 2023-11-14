import React from 'react'
import './LibraryCard.css'
import img1 from '../../../assets/imgs/LibraryCard/1.png'
const LibraryCard = () => {
  return (
    <div className='library_card'>
        <div className="library_card_image_cover">
        <   img src={img1} alt="" />
        </div>
        <h3>Alisher Navoiy</h3>
        <p><i className="fa-solid fa-book"></i> Jami kitoblar soni: <font>4512</font></p>
        <p><i className="fa-solid fa-star"></i> Reyting: <font>1</font></p>
        <p><i className="fa-solid fa-location-dot"></i> Joylashuv: <font>www.location.com</font></p>
        <div className="library_card_button">
          <button>Ko`proq</button>
        </div>
    </div>
  )
}

export default LibraryCard