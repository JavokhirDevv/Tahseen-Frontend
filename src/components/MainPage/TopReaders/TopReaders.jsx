import React from 'react'
import './TopReaders.css'
import UserCard from '../../GeneralComponents/UserCard/UserCard'

const TopReaders = () => {
  return (
    <div className='topreader'>
        <h1>Top Kitobxonlar</h1>
        <div className="topreader_slider">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
        </div>
    </div>
  )
}

export default TopReaders