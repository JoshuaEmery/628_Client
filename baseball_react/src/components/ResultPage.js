import React, { useEffect, useState, useContext } from "react";
import PlayerContext from "../context/PlayerContext";

function ResultPage({ p1_id, p2_id }) {
  const players = useContext(PlayerContext);
  const [player1, setPlayer1] = useState({});
  const [player2, setPlayer2] = useState({});
  const [winChance, setWinChance] = useState(null);
  const [error, setError] = useState(null);
  //Load the data and set an error state if the data was not successfull
  //I am not sure if all of this is necessary now that I am using context for this
  //however I am going to leave it for now
  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null); // Reset the error state
        const data1 = players.find((p) => p._id === p1_id);
        const data2 = await players.find((p) => p._id === p2_id);
        console.log(data1);
        console.log(data2);

        if (data1 && data2) {
          setPlayer1(data1);
          setPlayer2(data2);

          const calculateWinChance =
            data1.player_rating / (data1.player_rating + data2.player_rating);
          setWinChance(calculateWinChance);
        } else {
          setError("Failed to fetch players.");
        }
      } catch (error) {
        setError("An error occurred while fetching players.");
        console.error("Error fetching player data: ", error, p1_id, p2_id);
      }
    };

    fetchData();
  }, [p1_id, p2_id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

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
