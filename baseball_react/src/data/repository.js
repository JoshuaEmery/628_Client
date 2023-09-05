//this class is responsible for fetching data from the API
async function getAllPlayers() {
  const response = await fetch("https://cs628api.azurewebsites.net/players");
  if (!response.ok) throw new Error("Something went wrong");
  return await response.json();
}

async function getPlayerById(id) {
  const response = await fetch(
    "https://cs628api.azurewebsites.net/players/" + id
  );
  if (!response.ok) throw new Error("Something went wrong");
  return await response.json();
}

//Create a new player
async function createPlayer(player) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(player),
  };
  console.log(player);
  console.log(requestOptions);
  const response = await fetch(
    "https://cs628api.azurewebsites.net/players",
    requestOptions
  );

  if (!response.ok) throw new Error("Failed to create player");

  return await response.json();
}

//Update very similar to create
async function updatePlayer(updatedPlayer) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedPlayer),
  };

  console.log(updatedPlayer);
  console.log(requestOptions);

  const response = await fetch(
    `https://cs628api.azurewebsites.net/players${updatePlayer.id}`,
    requestOptions
  );

  if (!response.ok) throw new Error("Failed to update player");

  return await response.json();
}

export { getAllPlayers, createPlayer, getPlayerById, updatePlayer };
