import React from "react";
import Header from "../components/MainPage/Header/Header";
import Footer from "../components/GeneralComponents/Footer/Footer";
import BooksCover from "../components/Books/BooksCover/BooksCover";
import { Navigate, Route, Routes } from "react-router-dom";
import BookPage from "../components/BookPage/BookPage/BookPage";
import Libraries from "../components/Libraries/Libraries";
import Audiobooks from "../components/AudioBooks/AudioBooks/Audiobooks";
import MainPage from "../components/MainPage/MainPage/MainPage";
import LoginPage from "../components/LoginSignUp/LoginPage";
import AudioBookPage from "../components/AudioBookPage/AudioBookPage/AudioBookPage";

const Root = () => {
  return (
    <>
      <Routes>
          <Route path="/login" element={<LoginPage />} />
        <Route element={<Header />}>
          <Route path="/bosh-sahifa" element={<MainPage />} />
          <Route path="/kitoblar" element={<BooksCover />} />
          <Route path="/kitob/:id" element={<BookPage />} />
          <Route path="/kutubxonalar" element={<Libraries />} />
          <Route path="/audio-kitoblar" element={<Audiobooks />} />
          <Route path="/audio-kitob" element={<AudioBookPage />} />
        </Route>

        <Route path="/" element={<Navigate to={'/login'}/>}/>
      </Routes>
    </>
  );
};

export default Root;
