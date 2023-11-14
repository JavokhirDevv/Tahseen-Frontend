import React from "react";
import Banner from '../Banner/Banner'
import TahseenService from '../TahseenServices/TahseenService'
import TopBooks from '../TopBooks/TopBooks'
import Statistics from '../Statistics/Statistics'
import TopReaders from '../TopReaders/TopReaders'
import TopLibrary from '../TopLibraries/TopLibrary'
import About from '../About/About'
import './MainPage.css'

const MainPage = () => {
  return (
    <div>
      <Banner />
      <TahseenService />
      <TopBooks />
      <Statistics />
      <TopReaders />
      <TopLibrary />
      <About />
    </div>
  );
};

export default MainPage;
