import React from 'react'
import './TahseenService.css'
const TahseenService = () => {
  return (
    <div className='tahseen_service'>

        <div className="service_card">

            <div className="service_card_icon">
                <i className="fa-solid fa-book"></i>
            </div>
            
            <div className="service_card_text">
                <h4>E-Kitoblar</h4>
                <p>Platformadagi elektron kitoblarni yuklab olish</p>
            </div>

        </div>

        <div className="service_card">

            <div className="service_card_icon">
            <i className="fa-solid fa-book-open-reader"></i>
            </div>
            
            <div className="service_card_text">
                <h4>Online Kutubxona</h4>
                <p>Platformadagi orqali kitoblarni online ijaraga oling</p>
            </div>

        </div>

        <div className="service_card">

            <div className="service_card_icon">
            <i className="fa-solid fa-headphones"></i>
            </div>
            
            <div className="service_card_text">
                <h4>Audio Kitoblar</h4>
                <p>Platformadagi orqali Audio kitoblarni tinglang</p>
            </div>

        </div>

    </div>
  )
}

export default TahseenService