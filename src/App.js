import React from "react";
import Footer from "./common/Footer/footer";
import Header from "./common/Header/header";
import Banner from "./compunents/banner";
import ListMoive from "./compunents/List-movie";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Banner />
        <ListMoive />
      </div>
      <Footer />
    </div>
  );
}

export default App;
