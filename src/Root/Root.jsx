import React from 'react'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Statistics from '../components/Statistics/Statistics'
import About from '../components/About/About'
import TopBooks from '../components/TopBooks/TopBooks'
import TopReaders from '../components/TopReaders/TopReaders'

const root = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Statistics/>
      <TopBooks/>
      <TopReaders/>
      <About/>

    </div>
  )
}

export default root