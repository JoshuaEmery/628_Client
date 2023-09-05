import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { getAllPlayers, getPlayerById } from "../data/repository";

function PlayerSelection() {
  const navigate = useNavigate();

  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    getAllPlayers().then((data) => {
      setPlayerData(data);
    });
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

  function handlePlayerClick(player) {
    if (selectedPlayers.length < 2 && !selectedPlayers.includes(player)) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  }

  function navigateToResultPage() {
    navigate("/result", { state: selectedPlayers });
  }

  return (
    <div className="player-selection">
      <h1>Player Selection</h1>

      <div className="player-list">
        {playerData.map((player, index) => (
          <div
            key={index}
            className={`player-card ${
              selectedPlayers.includes(player) ? "selected" : ""
            }`}
            onClick={() => handlePlayerClick(player)}
          >
            {playerData.map((player, index) => (
              <div
                key={index}
                className={`player-card ${
                  selectedPlayers.includes(player) ? "selected" : ""
                }`}
                onClick={() => handlePlayerClick(player)}
              >
                <img
                  src={player.image_url}
                  alt={`${player.first_name} ${player.last_name}`}
                />

                <h2>{`${player.first_name} ${player.last_name}`}</h2>

                <p>Team: {player.mlb_team}</p>

                <p>Max HR Distance: {player.max_hr_distance}</p>

                <p>Avg HR Distance: {player.avg_hr_distance}</p>

                <p>Max Exit Velocity: {player.max_exit_velocity}</p>

                <p>Avg Exit Velocity: {player.avg_exit_velocity}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <button
        onClick={navigateToResultPage}
        disabled={selectedPlayers.length < 2}
      >
        Calculate Win Chance
      </button>
    </div>
  );
}

export default PlayerSelection;
