import React, { useEffect, useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import PlayerContext from "../context/PlayerContext";

function PlayerSelection({ p1_callBack, p2_callBack, p1_clear, p2_clear }) {
  const navigate = useNavigate();
  const players = useContext(PlayerContext);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [playerData, setPlayerData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedPlayer1Index, setSelectedPlayer1Index] = useState(null);
  const [selectedPlayer2Index, setSelectedPlayer2Index] = useState(null);
  const [player1, setPlayer1] = useState({});
  const [player2, setPlayer2] = useState({});

  const handlePlayer1Click = (index, p1_id) => {
    console.log(p1_id);
    // If already selected, unselect
    if (selectedPlayer1Index === index) {
      setSelectedPlayer1Index(null);
      p1_clear();
      //setPlayer1({});
    } else {
      setSelectedPlayer1Index(index);
      const selectedPlayer = players.find((player) => player._id === p1_id);
      p1_callBack(selectedPlayer);
      //console.log(selectedPlayer);
    }
  };
  const handlePlayer2Click = (index, p2_id) => {
    console.log(p2_id);
    // If already selected, unselect
    if (selectedPlayer2Index === index) {
      setSelectedPlayer2Index(null);
      p2_clear();
      //setPlayer2({});
    } else {
      setSelectedPlayer2Index(index);
      const selectedPlayer = players.find((player) => player._id === p2_id);
      p2_callBack(selectedPlayer);
      //console.log(selectedPlayer);
    }
  };

  const handlePlayerClick = () => {
    console.log("player clicked");
  };

  const navigateToResultPage = () => {
    console.log("navigate clicked");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null); // Reset the error state
        console.log(players);

        if (players) {
          //do whatever here
        } else {
          setError("Failed to fetch players.");
        }
      } catch (error) {
        setError("An error occurred while fetching players.");
        console.error("Error fetching player data: ", error);
      }
    };

    fetchData();
  }, []);

  //   const playerData = [
  //     {
  //       first_name: "Randy",

  //       last_name: "Arozarena",

  //       image_url:
  //         "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_426,q_auto:best/v1/people/668227/headshot/67/current",

  //       mlb_team: "Tampa Bay Rays",

  //       player_rating: "101",

  //       max_hr_distance: "436",

  //       avg_hr_distance: "399",

  //       max_exit_velocity: "114.3",

  //       avg_exit_velocity: "92.5",

  //       player_id: "668227",
  //     },

  //     {
  //       first_name: "Luis",

  //       last_name: "Robert Jr",

  //       image_url:
  //         "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_426,q_auto:best/v1/people/673357/headshot/67/current",

  //       mlb_team: "Chicago White Sox",

  //       player_rating: "102",

  //       max_hr_distance: "450",

  //       avg_hr_distance: "404",

  //       max_exit_velocity: "113.6",

  //       avg_exit_velocity: "88.4",

  //       player_id: "673357",
  //     },

  //     {
  //       first_name: "Adley",

  //       last_name: "Rutschman",

  //       image_url:
  //         "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_426,q_auto:best/v1/people/668939/headshot/67/current",

  //       mlb_team: "Baltimore Orioles",

  //       player_rating: "103",

  //       max_hr_distance: "424",

  //       avg_hr_distance: "398",

  //       max_exit_velocity: "111.1",

  //       avg_exit_velocity: "87.9",

  //       player_id: "668939",
  //     },

  //     {
  //       first_name: "Pete",

  //       last_name: "Alonso",

  //       image_url:
  //         "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_426,q_auto:best/v1/people/624413/headshot/67/current",

  //       mlb_team: "New York Mets",

  //       player_rating: "104",

  //       max_hr_distance: "448",

  //       avg_hr_distance: "404",

  //       max_exit_velocity: "115.7",

  //       avg_exit_velocity: "89.3",

  //       player_id: "624413",
  //     },

  //     {
  //       first_name: "Julio",

  //       last_name: "Rodriguez",

  //       image_url:
  //         "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_426,q_auto:best/v1/people/677594/headshot/67/current",

  //       mlb_team: "Seattle Mariners",

  //       player_rating: "105",

  //       max_hr_distance: "454",

  //       avg_hr_distance: "394",

  //       max_exit_velocity: "116.7",

  //       avg_exit_velocity: "92.9",

  //       player_id: "677594",
  //     },

  //     {
  //       first_name: "Mookie",

  //       last_name: "Betts",

  //       image_url:
  //         "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_426,q_auto:best/v1/people/605141/headshot/67/current",

  //       mlb_team: "Los Angeles Dodgers",

  //       player_rating: "106",

  //       max_hr_distance: "427",

  //       avg_hr_distance: "396",

  //       max_exit_velocity: "107.9",

  //       avg_exit_velocity: "90.3",

  //       player_id: "605141",
  //     },

  //     {
  //       first_name: "Vladimir",

  //       last_name: "Guerrero Jr",

  //       image_url:
  //         "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_426,q_auto:best/v1/people/665489/headshot/67/current",

  //       mlb_team: "Toronto Blue Jays",

  //       player_rating: "107",

  //       max_hr_distance: "465",

  //       avg_hr_distance: "409",

  //       max_exit_velocity: "117.4",

  //       avg_exit_velocity: "95",

  //       player_id: "665489",
  //     },

  //     {
  //       first_name: "Adolis",

  //       last_name: "Garcia",

  //       image_url:
  //         "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_426,q_auto:best/v1/people/666969/headshot/67/current",

  //       mlb_team: "Texas Rangers",

  //       player_rating: 108,

  //       max_hr_distance: "450",

  //       avg_hr_distance: "398",

  //       max_exit_velocity: "112.4",

  //       avg_exit_velocity: "91",

  //       player_id: "666969",
  //     },
  //   ];

  // function handlePlayerClick(player) {
  //   if (selectedPlayers.length < 2 && !selectedPlayers.includes(player)) {
  //     setSelectedPlayers([...selectedPlayers, player]);
  //   }
  // }

  // function navigateToResultPage() {
  //   navigate("/result", { state: selectedPlayers });
  // }
  return (
    <div className="container">
      <div className="row">
        {players.map((player, index) => (
          <div className="col-md-3" key={index}>
            <div className="card mb-4">
              <img src={player.image_url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{`${player.first_name} ${player.last_name}`}</h5>
                <p className="card-text">Team: {player.mlb_team}</p>
                <p className="card-text">
                  Max HR Distance: {player.max_hr_distance}
                </p>
                <p className="card-text">
                  Avg HR Distance: {player.avg_hr_distance}
                </p>
                <p className="card-text">
                  Max Exit Velocity: {player.max_exit_velocity}
                </p>
                <p className="card-text">
                  Avg Exit Velocity: {player.avg_exit_velocity}
                </p>
                <div className="card-buttons d-flex justify-content-between m-2">
                  <button
                    className={`btn btn-outline-primary ${
                      selectedPlayer1Index === index
                        ? "active"
                        : selectedPlayer1Index !== null
                        ? "inactive"
                        : ""
                    }`}
                    onClick={() => handlePlayer1Click(index, player._id)}
                    disabled={
                      selectedPlayer1Index !== null &&
                      selectedPlayer1Index !== index
                    }
                  >
                    Player 1
                  </button>
                  <button
                    className={`btn btn-outline-success ${
                      selectedPlayer2Index === index
                        ? "active"
                        : selectedPlayer2Index !== null
                        ? "inactive"
                        : ""
                    }`}
                    onClick={() => handlePlayer2Click(index, player._id)}
                    disabled={
                      selectedPlayer2Index !== null &&
                      selectedPlayer2Index !== index
                    }
                  >
                    Player 2
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  // return (
  //   <div className="player-selection">
  //     <h1>Player Selection</h1>

  //     <div className="player-list">
  //       {players.map((player, index) => (
  //         <div
  //           key={index}
  //           className={`player-card ${
  //             selectedPlayers.includes(player) ? "selected" : ""
  //           }`}
  //           onClick={() => handlePlayerClick(player)}
  //         >
  //           {playerData.map((player, index) => (
  //             <div
  //               key={index}
  //               className={`player-card ${
  //                 selectedPlayers.includes(player) ? "selected" : ""
  //               }`}
  //               onClick={() => handlePlayerClick(player)}
  //             >
  //               <img
  //                 src={player.image_url}
  //                 alt={`${player.first_name} ${player.last_name}`}
  //               />

  //               <h2>{`${player.first_name} ${player.last_name}`}</h2>

  //               <p>Team: {player.mlb_team}</p>

  //               <p>Max HR Distance: {player.max_hr_distance}</p>

  //               <p>Avg HR Distance: {player.avg_hr_distance}</p>

  //               <p>Max Exit Velocity: {player.max_exit_velocity}</p>

  //               <p>Avg Exit Velocity: {player.avg_exit_velocity}</p>
  //             </div>
  //           ))}
  //         </div>
  //       ))}
  //     </div>

  //     <button
  //       onClick={navigateToResultPage}
  //       disabled={selectedPlayers.length < 2}
  //     >
  //       Calculate Win Chance
  //     </button>
  //   </div>
  // );
}

export default PlayerSelection;
