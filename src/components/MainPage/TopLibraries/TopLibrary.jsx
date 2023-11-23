import React from 'react'
import './TopLibrary.css'
import LibraryCard from '../../GeneralComponents/LibraryCard/LibraryCard'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios";
import api_base_url from '../../../configurations/Config'
const TopLibrary = () => {
  const [libraries, setLibraries] = useState([])
  var GetAllLibraries = async () =>{
    await axios.get(`${api_base_url}api/LibraryBranch`)
    .then(l => setLibraries(l.data.data))
    .catch(err => console.log(err))
  }
  useEffect(() =>{
    GetAllLibraries();
  }, [])
  return (
    <div className='top_library'>
        <h1>TOP KUTUBXONALAR</h1>
        <div className="top_library_slider">
          {
            libraries.map(value => {
              return (
              <LibraryCard LibraryData={value}/>
              )
            })
          }
        </div>
    </div>
  )
}

export default TopLibrary