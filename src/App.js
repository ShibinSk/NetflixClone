import React from "react";
import Navbar from "./components/NavBar/navbar";
import "./App.css";

import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {
  originals,
  action,
  comady,
  horrer,
  Romance,
  Documentaries,
} from "./urls";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={horrer} title="HorrorMovies" isSmall />
      <RowPost url={comady} title="comady" isSmall />
      <RowPost url={Romance} title="RomanceMovies" isSmall />
      <RowPost url={Documentaries} title="Documentaries" isSmall />
      <Footer />
    </div>
  );
}

export default App;
