import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-main'>
        {/* <div className="footer_links_cover">
        <ul>
            <li><a href="/">Email: tahseen.uz@gmail.com</a></li>
            <li><a href="/">Telefon raqam: +998945678960</a></li>
            <li><a href="/">Biz Haqimizda</a></li>
        </ul>

        <ul>
            <li><a href="/">Email: tahseen.uz@gmail.com</a></li>
            <li><a href="/">Telefon raqam: +998945678960</a></li>
            <li><a href="/">Biz Haqimizda</a></li>
        </ul>

        <ul>
            <li><a href="/">Email: tahseen.uz@gmail.com</a></li>
            <li><a href="/">Telefon raqam: +998945678960</a></li>
            <li><a href="/">Biz Haqimizda</a></li>
        </ul>

        </div>
        <h1>Tahseen_Team 2023</h1> */}

        <div className="footer-line"></div>
        <div className="footer-flex">
          <ul className='footer-items'>
            <li className='footer-item'>
              <a href="#">Yordam</a>
            </li>
            <li className='footer-item'>
              <a href="#">Biz haqimizda</a>
            </li>
            <li className='footer-item'>
              <a href="#">Xafvsizlik</a>
            </li>
            <li className='footer-item'>
              <a href="#">Bog'lanish</a>
            </li>
          </ul>

          <div className="footer-tahseen">
            <h1>Tahseen 2023 © </h1>
          </div>
        </div>
    </div>
  )
}

export default Footer