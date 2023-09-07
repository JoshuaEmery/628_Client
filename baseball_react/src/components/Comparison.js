import { useState, useEffect } from "react";
function Comparison({ player1, player2, clearPlayers }) {
  const [compReady, setCompReady] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const p1_win =
    player1.player_rating / (player1.player_rating + player2.player_rating);
  const p2_win =
    player2.player_rating / (player1.player_rating + player2.player_rating);
  console.log(p1_win);
  console.log(p2_win);
  useEffect(() => {
    // Load the Visualization API and the corechart package.
    window.google.charts.load("current", { packages: ["corechart"] });

    // Set a callback to run when the Google Visualization API is loaded.
    window.google.charts.setOnLoadCallback(drawChart);
  });

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {
    // Create the data table.
    const data = new window.google.visualization.DataTable();
    data.addColumn("string", "Player");
    data.addColumn("number", "Wins");
    data.addRows([
      [`${player1.first_name} ${player1.last_name}`, p1_win],
      [`${player2.first_name} ${player2.last_name}`, p2_win],
    ]);

    // Set chart options
    const options = { title: "Matchup Analysis", is3D: true };

    // Instantiate and draw our chart, passing in some options.
    const chart = new window.google.visualization.PieChart(
      document.getElementById("chart_div")
    );
    chart.draw(data, options);
  }
  useEffect(() => {
    if (player1 && player2) {
      setCompReady(true);
      console.log("comparison ready");
    } else {
      setCompReady(false);
      console.log("comparison not ready");
    }
    //make this run everytime the page renders
  }, [player1, player2]);

  const handleAnalyzeClick = () => {
    setShowModal(true);
  };

  if (!compReady) {
    return (
      <div>
        <h2>Choose 2 players</h2>
      </div>
    );
  } else {
    return (
      <div>
        <div className="row">
          <div className="col-sm-4">
            <div className="card mb-4 d-flex align-items-center justify-content-center">
              <img
                src={player1.image_url}
                className="card-img-top h-50 w-50"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{`${player1.first_name} ${player1.last_name}`}</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <img className="w-100 h-50" src="/vs-41934.png" alt="" />
            <div className="d-flex justify-content-around">
              <button
                onClick={handleAnalyzeClick}
                className="btn btn-outline-danger"
              >
                Analyze this matchup
              </button>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card mb-4 d-flex align-items-center justify-content-center">
              <img
                src={player2.image_url}
                className="card-img-top h-50 w-50"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{`${player2.first_name} ${player2.last_name}`}</h5>
              </div>
            </div>
          </div>
        </div>
        {/* Bootstrap modal */}
        <div
          className={`modal fade ${showModal ? "show d-block" : "d-none"}`}
          tabIndex="1"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Matchup Analysis</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setShowModal(false);
                    clearPlayers();
                  }}
                ></button>
              </div>
              <div className="modal-body">
                {/* Your analysis content here */}
                {/* Google Chart */}
                <div
                  id="chart_div"
                  style={{ width: "100%", height: "500px" }}
                ></div>

                {/* Player Ratings */}
                <div>
                  <h6>Player Ratings:</h6>
                  <p>{`${player1.first_name} ${player1.last_name}: ${player1.player_rating}`}</p>
                  <p>{`${player2.first_name} ${player2.last_name}: ${player2.player_rating}`}</p>

                  {/* You can add more details for comparison here */}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowModal(false);
                    clearPlayers();
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comparison;
