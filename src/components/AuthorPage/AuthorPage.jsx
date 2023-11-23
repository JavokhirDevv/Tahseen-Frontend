import React from "react";
import "./AuthorPage.css";
import axios from "axios";
import api_base_url from "../../configurations/Config";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const AuthorPage = () => {
  const [author, setAuthor] = useState({});
  const {id} = useParams()
  const GetAuthor = async () => {
    await axios.get(api_base_url+'api/authors')
    .then(a => {
        const result = a.data.data.find((auth) => auth.id == id);
        if(result){
            setAuthor(result)
        } 
        else{
            console.log(`Author with Id ${id} not found`);
        }
    })
    .catch(error => {
        console.log(error)
    })
  }
  useEffect(() => {
    GetAuthor();
  }, [])
  return (
    <div className="author_page_header">
      <div className="author_page_header_img">
        <img src={`${api_base_url + author.authorImage}`} alt="" />
      </div>

      <div className="author_page_content">
        <h1 className="author_page_name">{author.firstName + " " + author.lastName}</h1>
        <p>Millati: {author.nationality}</p>
        <p>
         {author.biography}
        </p>
        <br />
        <hr className="author_page_hr" />
        <div className="author_page_bottom_side">
          <button className="author_page_save">Saqlash</button>
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;
