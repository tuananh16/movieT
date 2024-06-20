import React from "react";
import Footer from "./common/Footer/footer";
import Header from "./common/Header/header";
import Banner from "./compunents/Banner";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Banner />
      </div>
      <Footer />
    </div>
  );
}

export default App;
