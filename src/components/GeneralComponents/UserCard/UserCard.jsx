import React from 'react'
import './UserCard.css'
import img1 from '../../../assets/imgs/usercard/1.jpg'
const UserCard = () => {
  return (
    <div className='usercard'>
        <div className="user_image_cover">
            <img src={img1} alt="" />
        </div>
        <h2>Andrew Huberman</h2>
        <p><i className="fa-solid fa-list"></i> O`qilgan kitoblar soni: <font>358</font></p>
        <p><i className="fa-solid fa-star"></i> Reyting: <font>1</font></p>
    </div>
  )
}

export default UserCard