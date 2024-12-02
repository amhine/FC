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
  

// Afich jouer
function displayAllPlayers() {
    const container = document.getElementById("cards-container");
    container.innerHTML = ""; 
    tableaujouer.forEach((joueur) => {
        container.insertAdjacentHTML("beforeend", cart(joueur));
    });
}

// Ajout par form
document.getElementById('submit').addEventListener('click', function (e) {
  e.preventDefault(); 
  console.log(1);
let name=document.getElementById('name').value;
let photo= document.getElementById('photo').value;
let position = document.getElementById('Position').value;
let nationality=document.getElementById('Nationality').value;
let club= document.getElementById('club').value;
let rating= document.getElementById('rating').value;
let pace = document.getElementById('pace').value;
let shooting=  document.getElementById('shooting').value;
let passing=  document.getElementById('passing').value;
let dribbling=  document.getElementById('dribbling').value;
let defending= document.getElementById('defending').value;
let physical = document.getElementById('physical').value;
let diving= document.getElementById('diving').value;
let handling = document.getElementById('handling').value;
let kicking = document.getElementById('kicking').value;
let reflexes =  document.getElementById('reflexes').value;
let speed = document.getElementById('speed').value;
let positioning=document.getElementById('positioning').value;


const pattern = {
    name: /^[a-zA-Z\s]+$/, 
    photo: /^https:\/\//,
    club: /^[a-zA-Z\s]+$/,
    nationality: /^[a-zA-Z\s]+$/,
    rating: /^\d{1,2}$/,
    pace: /^\d{1,2}$/,
    shooting: /^\d{1,2}$/,
    passing: /^\d{1,2}$/,
    dribbling: /^\d{1,2}$/,
    defending: /^\d{1,2}$/,
    physical: /^\d{1,2}$/,
    diving: /^\d{1,2}$/,
    handling: /^\d{1,2}$/,
    kicking: /^\d{1,2}$/,
    reflexes: /^\d{1,2}$/,
    speed: /^\d{1,2}$/,
    positioning: /^\d{1,2}$/,
  };

if(!pattern.name.test(name)){
  alert("Obligatoire !!!");
  return;
}
  let joueur = {
    name:name ,
    photo:photo,
    position: position ,
    nationality:nationality,
    club:club,
    rating: rating,
    pace: pace,
    shooting: shooting,
    passing:passing,
    dribbling:dribbling,
    defending:defending ,
    physical: physical,
    diving: diving,
    handling: handling,
    kicking: kicking,
    reflexes:reflexes,
    speed:speed ,
    positioning:positioning ,
  };

  tableaujouer.push(joueur);
  displayAllPlayers();
});

// Regex




//


//   if  {
//    alert("gfchg nb nb bhj ")
//    return;

//   } else {
//     Name.style.border = "2px solid red";
//   }

//   if (pattern.photo.test(photo.value)) {
//     photo.style.border = "2px solid green";
//   } else {
//     photo.style.border = "2px solid red";
//   }

//   if (pattern.club.test(club.value)) {
//     club.style.border = "2px solid green";
//   } else {
//     club.style.border = "2px solid red";
//   }

//   if (pattern.nationality.test(nationality.value)) {
//     nationality.style.border = "2px solid green";
//   } else {
//     nationality.style.border = "2px solid red";
//   }

//   if (pattern.rating.test(rating.value)) {
//     rating.style.border = "2px solid green";
//   } else {
//     rating.style.border = "2px solid red";
//   }

// });


// filtre position
function filterPosition(position) {
    const playersContainer = document.getElementById("players-container");
    playersContainer.innerHTML = "";
    const filteredPlayers = tableaujouer.filter(function(joueur) {
        return joueur.position === position;
    });
        filteredPlayers.forEach(function(joueur) {
            const playerDiv = document.createElement("div");
            playerDiv.classList.add("player-card");
            playerDiv.innerHTML = `
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
            playersContainer.appendChild(playerDiv);
        });
    }



document.getElementById("pos1").addEventListener("click", function() {
    filterPosition("ST"); 
});
document.getElementById("pos2").addEventListener("click", function() {
    filterPosition("ST"); 
});
document.getElementById("pos3").addEventListener("click", function() {
    filterPosition("LM"); 
});
document.getElementById("pos4").addEventListener("click", function() {
    filterPosition("CM"); 
});
document.getElementById("pos5").addEventListener("click", function() {
    filterPosition("CM"); 
});
document.getElementById("pos6").addEventListener("click", function() {
    filterPosition("RM"); 
});
document.getElementById("pos7").addEventListener("click", function() {
    filterPosition("LB"); 
});
document.getElementById("pos8").addEventListener("click", function() {
    filterPosition("CB"); 
});
document.getElementById("pos9").addEventListener("click", function() {
    filterPosition("CB"); 
});
document.getElementById("pos10").addEventListener("click", function() {
    filterPosition("RB"); 
});
document.getElementById("pos11").addEventListener("click", function() {
    filterPosition("GK"); 
});
