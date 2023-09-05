import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
//import the getPlayerByID method
import { getPlayerById } from "../data/repository";

function ResultPage({ p1_id, p2_id }) {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [winChance, setWinChance] = useState(null);
  // useEffect to load data for player1 and player2

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data1 = await getPlayerById(p1_id);
        setPlayer1(data1);

        const data2 = await getPlayerById(p2_id);
        setPlayer2(data2);
        const calculateWinChance =
          data1.player_rating / (data1.player_rating + data2.player_rating);
        setWinChance(calculateWinChance);
      } catch (error) {
        console.error("Error fetching player data: ", error, p1_id, p2_id);
      }
    };
    fetchData();
  }, [p1_id, p2_id]);

  //   const location = useLocation();

  //   const selectedPlayers = location.state;

  //   function calculateWinChance() {
  //     const p1 = player1;

  //     const p2 = player2;

  //     const chance =
  //       (p1.player_rating / (p1.player_rating + p2.player_rating)) * 100;

  //     return chance.toFixed(2);
  //   }

  return (
    <div className="result-page">
      <h1>Result Page</h1>

      <p>Selected Players:</p>
      <p>
        {player1.first_name} {player1.last_name}
      </p>
      <h2>VS</h2>
      <p>
        {player2.first_name} {player2.last_name}
      </p>

      <p>Player 1 Win Chance: {winChance}%</p>
      <p>Player 2 Win Chance: {1 - winChance}%</p>
    </div>
  );
}

export default ResultPage;
