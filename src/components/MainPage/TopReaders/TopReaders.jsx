import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TopReaders.css'; // Assuming you have a separate CSS file for TopReaders styling
import UserCard from '../../GeneralComponents/UserCard/UserCard';

const TopReaders = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
    AOS.refresh(); // Refresh AOS on mount

    // You might need to refresh AOS on scroll, depending on your setup
    window.addEventListener('scroll', AOS.refresh);

    return () => {
      window.removeEventListener('scroll', AOS.refresh);
    };
  }, []);

  return (
    <div className='topreader'>
      <h1>Top Kitobxonlar</h1>
      <div className="topreader_slider">
        <div className="animate__animated animate__backInDown" data-aos="fade-right" data-aos-delay="600">
          <UserCard />
        </div>

        <div className="animate__animated animate__backInDown" data-aos="fade-left" data-aos-delay="600">
          <UserCard />
        </div>

        <div className="animate__animated animate__backInRight" data-aos="fade-up" data-aos-delay="600">
          <UserCard />
        </div>
        
        <div className="animate__animated animate__backInUp" data-aos="fade-down-left" data-aos-delay="600">
          <UserCard />
        </div>

      </div>
    </div>
  );
};

export default TopReaders;
