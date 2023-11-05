import React from 'react'
import Header from '../components/MainPage/Header/Header'
import Banner from '../components/MainPage/Banner/Banner'
import TopReaders from '../components/MainPage/TopReaders/TopReaders'
import Statistics from '../components/MainPage/Statistics/Statistics'
import TopBooks from '../components/MainPage/TopBooks/TopBooks'
import About from '../components/MainPage/About/About'
import TahseenService from '../components/MainPage/TahseenServices/TahseenService'
import TopLibrary from '../components/MainPage/TopLibraries/TopLibrary'
import Footer from '../components/MainPage/Footer/Footer'
import BooksCover from '../components/Books/BooksCover/BooksCover'
import { Route, Routes } from 'react-router-dom'
import BookPage from '../components/BookPage/BookPage/BookPage'

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
       </Routes>
      <Footer/>
    </>
  )
}

export default Root