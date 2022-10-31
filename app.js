const loadPlayers = (name) => {
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlayers(data.player));
};

const displayPlayers = (players) => {
    // console.log(players);
    const playerContainer = document.getElementById("player-container");
    playerContainer.textContent = ``;
    players.forEach(player => {
        console.log(player);
        const div = document.createElement("div");
        div.classList.add("card", "card-compact", "w-96", "bg-base-100", "shadow-xl");
        div.innerHTML = `
          <figure><img src="${player.strThumb ? player.strThumb : './images/logo.png'}" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">${player.strPlayer}</h2>
            <p>${player.strDescriptionEN ? player.strDescriptionEN.slice(0, 100)+'...' : 'No Description of this player!'}</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
          `;
          playerContainer.appendChild(div);
  })
};

const searchPlayers = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPlayers(searchText);

  searchField.value = ``;
};
