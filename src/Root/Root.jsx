import React from "react";
import Header from "../components/MainPage/Header/Header";
import BooksCover from "../components/Books/BooksCover/BooksCover";
import { Navigate, Route, Routes } from "react-router-dom";
import BookPage from "../components/BookPage/BookPage/BookPage";
import Libraries from "../components/Libraries/Libraries";
import Audiobooks from "../components/AudioBooks/AudioBooks/Audiobooks";
import MainPage from "../components/MainPage/MainPage/MainPage";
import LoginPage from "../components/LoginSignUp/LoginPage";
import AudioBookPage from "../components/AudioBookPage/AudioBookPage/AudioBookPage";
import LibraryPage from "../components/LibraryPage/LibraryPage/LibraryPage";
import Authors from "../components/Authors/Authors";
import AuthorPage from "../components/AuthorPage/AuthorPage";
import LibrarianDashboard from "../components/DashboardLibrarian/LibrarianDashboard/LibrarianDashboard";
import PrivateRoute from "../utils/PrivateRoute";

const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Header />}>
          <Route path="/bosh-sahifa" element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          } />
          <Route path="/kitoblar" element={<BooksCover />} />
          <Route path="/kitob/:id" element={<BookPage />} />
          <Route path="/kutubxonalar" element={<Libraries />} />
          <Route path="/audio-kitoblar" element={<Audiobooks />} />
          <Route path="/audio-kitob" element={<AudioBookPage />} />
          <Route path="/kutubxona/:id" element={<LibraryPage />} />
          <Route path="/audio-kitob/:id" element={<AudioBookPage />} />
          <Route path="/mualliflar" element={<Authors />} />
          <Route path="/muallif/:id" element={<AuthorPage />} />
        </Route>

        <Route path="/kutubxonachi/*" element={<LibrarianDashboard />} />
        <Route path="/" element={<Navigate to={"/login"} />} />
      </Routes>
    </>
  );
};

export default Root;
