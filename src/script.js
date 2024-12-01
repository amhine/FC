// Aff form
document.querySelectorAll(".w-full.py-2.bg-black.text-white.font-bold.rounded-lg.hover\\:bg-gray-600.transition-all.duration-200").forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('formulair').classList.remove('hidden');
    });
});

// Cach form
document.getElementById('hideForm').addEventListener('click', function() {
    document.getElementById('formulair').classList.add('hidden');
});

// Cach form sub
document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault(); 
    document.getElementById('formulair').classList.add('hidden'); 
});

// form gk
function status() {
    let posittion = document.getElementById('Position').value;
    
    if (posittion === 'GK') {
        document.getElementById('joueurstatus').classList.add("hidden");
        document.getElementById("GKstatus").classList.remove("hidden");
    } else {
        document.getElementById('joueurstatus').classList.remove("hidden");
        document.getElementById("GKstatus").classList.add("hidden");
    }
}

document.getElementById('Position').addEventListener('change', status);

// cart  joueur
function cart(joueur) {
    return `
      <div class="relative w-36 h-52 flex flex-wrap justify-center gap-4">
        <img src="../img/badge_gold.webp" alt="" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 mb-2 flex flex-col items-center justify-center text-white p-2">
          <div class="flex items-center">
            <div class="flex flex-col justify-between items-center w-[10%] h-5">
              <span class="text-sm font-bold text-yellow-600">${joueur.rating}</span>
              <span class="text-sm font-semibold">${joueur.position}</span>
            </div>
            <div>
              <img src="${joueur.photo}" alt="" class="w-16 h-16 rounded-md" />
            </div>
          </div>
          <h3 class="text-center text-sm font-bold">${joueur.name}</h3>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <img src="${joueur.flag}" alt="" class="w-4 h-4 rounded-sm" />
            </div>
            <span class="block text-center text-xs">${joueur.club}</span>
          </div>
          <div class="flex flex-col text-xs w-full px-2 h-16">
            ${joueur.position === "GK" 
              ? `
            <div class="flex justify-around">
              <span>DIV:</span><span>${joueur.diving}</span>
              <span>HAN:</span><span>${joueur.handling}</span>
            </div>
            <div class="flex justify-around">
              <span>KIC:</span><span>${joueur.kicking}</span>
              <span>REF:</span><span>${joueur.reflexes}</span>
            </div>
            <div class="flex justify-around">
              <span>SPD:</span><span>${joueur.speed}</span>
              <span>POS:</span><span>${joueur.positioning}</span>
            </div>`
              : `
            <div class="flex justify-around">
              <span>PAC:</span><span>${joueur.pace}</span>
              <span>SHO:</span><span>${joueur.shooting}</span>
            </div>
            <div class="flex justify-around">
              <span>PAS:</span><span>${joueur.passing}</span>
              <span>DRI:</span><span>${joueur.dribbling}</span>
            </div>
            <div class="flex justify-around">
              <span>DEF:</span><span>${joueur.defending}</span>
              <span>PHY:</span><span>${joueur.physical}</span>
            </div>`
            }
          </div>
        </div>
      </div>
    `;
}

// stoc json
let tableaujouer = [];

// fetch json
fetch("players.json")
  .then((response) => response.json())
  .then((tableau) => {
    tableaujouer = tableau.players; 
    displayAllPlayers(); 
  })
  

// Aff jouer
function displayAllPlayers() {
    const container = document.getElementById("cards-container");
    container.innerHTML = ""; 
    tableaujouer.forEach((joueur) => {
        container.insertAdjacentHTML("beforeend", cart(joueur));
    });
}


// ajout par form
document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault(); 
console.log(1);
    let joueur = {
        name: document.getElementById('name').value,
        photo: document.getElementById('photo').value,
        position: document.getElementById('Position').value,
        nationality: document.getElementById('Nationality').value,
        club: document.getElementById('club').value,
        rating: document.getElementById('rating').value,
        pace: document.getElementById('pace').value,
        shooting: document.getElementById('shooting').value,
        passing: document.getElementById('passing').value,
        dribbling: document.getElementById('dribbling').value,
        defending: document.getElementById('defending').value,
        physical: document.getElementById('physical').value,
        diving: document.getElementById('diving').value,
        handling: document.getElementById('handling').value,
        kicking: document.getElementById('kicking').value,
        reflexes: document.getElementById('reflexes').value,
        speed: document.getElementById('speed').value,
        positioning: document.getElementById('positioning').value,
    };

    tableaujouer.push(joueur);
    displayAllPlayers();
});