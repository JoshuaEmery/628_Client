import { useState, useEffect } from "react";
function Comparison({ player1, player2 }) {
  const [compReady, setCompReady] = useState(false);
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

  if (!compReady) {
    return (
      <div>
        <h2>Choose 2 players</h2>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col-sm-4">
          <div className="card mb-4">
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
          <button>Analyze this matchup</button>
          <button>Clear players</button>
        </div>
        <div className="col-sm-4">
          <div className="card mb-4">
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
    );
  }
}

export default Comparison;
