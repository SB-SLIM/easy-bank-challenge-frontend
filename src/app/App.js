import React from "react";
import "../scss/style.scss";
import Footer from "./comonents/footer/footer";
import Header from "./comonents/header/header";
import Sections from "./comonents/sections/sections";

function App() {
  return (
    <div className="container-fluid row m-0 ">
      <Header />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;
