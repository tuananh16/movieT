import React from "react";
import Footer from "./common/Footer/footer";
import Header from "./common/Header/header";
import Banner from "./compunents/banner";
import ListMovie from "./compunents/List-movie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailMoive from "./compunents/detailMovie";
import MovieGenre from "./compunents/movieGenre";
import WatchMovie from "./compunents/watchMovie";
import FindMovies from "./compunents/findMovies";
import MovieCountry from "./compunents/movieCountry";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA29FURsB7niKmQdsQlnrrrcltt3DOS2-M",
  authDomain: "moviet-6ac15.firebaseapp.com",
  projectId: "moviet-6ac15",
  storageBucket: "moviet-6ac15.appspot.com",
  messagingSenderId: "527878826777",
  appId: "1:527878826777:web:eb4629ff33d47c470bb388",
  measurementId: "G-PKDJRTNE1F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <ListMovie />
              </>
            }
          />
          <Route path="/phim/*" element={<DetailMoive />} />
          <Route path="/phim/xem-phim/*" element={<WatchMovie />} />
          <Route path="/the-loai/*" element={<MovieGenre />} />
          <Route path="/quoc-gia/*" element={<MovieCountry />} />
          <Route path="/tim-phim/*" element={<FindMovies />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
