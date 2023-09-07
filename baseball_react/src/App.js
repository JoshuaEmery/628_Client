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
import PlayerContext, { PlayerProvider } from "./context/PlayerContext";
import Comparison from "./components/Comparison";
import "./App.css";
// Because our API is a free tier cloud service, it is not always quick to respond
//for this reason I am going to have the data load into the APP Component with
//a loading screen and store the data in context. This means that the data will
//be available to all components without having to make multiple API calls.

function App() {
  const [players, setPlayers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [player1, setPlayer1] = React.useState(null);
  const [player2, setPlayer2] = React.useState(null);
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
  const p1_callBack = (p1) => {
    console.log(p1);
    setPlayer1(p1);
  };
  const p2_callBack = (p2) => {
    console.log(p2);
    setPlayer2(p2);
  };
  const p1_clear = () => {
    setPlayer1(null);
  };
  const p2_clear = (p2) => {
    setPlayer2(null);
  };
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <PlayerProvider value={players}>
      <div>
        <Router>
          <Navbar />
          <div className="container">
            {player1 && player2 ? (
              <Comparison player1={player1} player2={player2} />
            ) : null}

            {/* <h5>
              Just putting the result page here for testing. Going to hardcode
              two ids. We will have to figure out how to get from player
              selection to results at a later time
            </h5>
            <ResultPage
              p1_id={"64f3b2f3de07d4788d026398"}
              p2_id={"64f3b2f3de07d4788d026399"}
            ></ResultPage> */}
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/playerselection"
                element={
                  <PlayerSelection
                    p1_callBack={p1_callBack}
                    p2_callBack={p2_callBack}
                    p1_clear={p1_clear}
                    p2_clear={p2_clear}
                  />
                }
              ></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </PlayerProvider>
  );
}

export default App;
