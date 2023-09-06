import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import PlayerSelection from "./components/PlayerSelection";
import ResultPage from "./components/ResultPage";
import { getAllPlayers } from "./data/repository";
// Because our API is a free tier cloud service, it is not always quick to respond
//for this reason I am going to have the data load into the APP Component with
//a loading screen and store the data in context. This means that the data will
//be available to all components without having to make multiple API calls.

function App() {
  const [players, setPlayers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPlayers();
        setPlayers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching player data: ", error);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Router>
        <Navbar />
        <div className="container">
          <h5>
            Just putting the result page here for testing. Going to hardcode two
            ids. We will have to figure out how to get from player selection to
            results at a later time
          </h5>
          {/* <ResultPage
            p1_id={"64f3b2f3de07d4788d026398"}
            p2_id={"64f3b2f3de07d4788d026399"}
          ></ResultPage> */}
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/playerselection"
              element={<PlayerSelection />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
