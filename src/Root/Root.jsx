import React from 'react'
import Header from '../components/MainPage/Header/Header'
import Banner from '../components/MainPage/Banner/Banner'
import TopReaders from '../components/MainPage/TopReaders/TopReaders'
import Statistics from '../components/MainPage/Statistics/Statistics'
import TopBooks from '../components/MainPage/TopBooks/TopBooks'
import About from '../components/MainPage/About/About'
import TahseenService from '../components/MainPage/TahseenServices/TahseenService'
import TopLibrary from '../components/MainPage/TopLibraries/TopLibrary'
import Footer from '../components/GeneralComponents/Footer/Footer'
import BooksCover from '../components/Books/BooksCover/BooksCover'
import { Route, Routes } from 'react-router-dom'
import BookPage from '../components/BookPage/BookPage/BookPage'
import Libraries from '../components/Libraries/Libraries'
import Audiobooks from '../components/AudioBooks/AudioBooks/Audiobooks'

const Root = () => {
  return (
    <>
      <Header/>
       <Routes>
        <Route path='/' element={
          <>
            <Banner/>
            <TahseenService/>
            <TopBooks/>
            <Statistics/>
            <TopReaders/>
            <TopLibrary/>
            <About/>
          </>
        }/>

        <Route path='/kitoblar' element={
          <>
            <BooksCover /> 
          </>
        }/>

        <Route path='/kitob' element={
          <>
            <BookPage /> 
          </>
        }/>
        
        <Route path='/kutubxonalar' element={
          <>
            <Libraries /> 
          </>
        }/>
       
        <Route path='/audio-kitoblar' element={
          <>
            <Audiobooks /> 
          </>
        }/>
       </Routes>
      <Footer/>
    </>
  )
}

export default Root