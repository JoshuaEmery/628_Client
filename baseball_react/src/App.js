import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import PlayerSelection from "./components/PlayerSelection";
import ResultPage from "./components/ResultPage";

function App() {
  return (
    <Router>
      <Navbar />
      <h5>
        Just putting the result page here for testing. Going to hardcode two
        ids. We will have to figure out how to get from player selection to
        results at a later time
      </h5>
      <ResultPage
        p1_id={"64f3b2f3de07d4788d026398"}
        p2_id={"64f3b2f3de07d4788d026399"}
      ></ResultPage>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/playerselection" element={<PlayerSelection />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
