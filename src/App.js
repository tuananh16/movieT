import React from "react";
import Footer from "./common/Footer/footer";
import Header from "./common/Header/header";
import Banner from "./compunents/Banner";
import ListMovie from "./compunents/List-movie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailMoive from "./compunents/detailMovie";
import MovieGenre from "./compunents/movieGenre";
import WatchMovie from "./compunents/watchMovie";
import FindMovies from "./compunents/findMovies";
import MovieCountry from "./compunents/movieCountry";

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
