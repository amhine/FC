
// Aff form
document.querySelectorAll(".w-full.py-2.bg-black.text-white.font-bold.rounded-lg.hover\\:bg-gray-600.transition-all.duration-200").forEach(function (button) {
  button.addEventListener('click', function () {
    document.getElementById('formulair').classList.remove('hidden');
  });
});

// Cach form
document.getElementById('hideForm').addEventListener('click', function () {
  document.getElementById('formulair').classList.add('hidden');
  document.getElementById('formulair').reset();
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


// Fonction de validation des champs
function validation() {
  let name = document.getElementById('name').value;
  let photo = document.getElementById('photo').value;
  let position = document.getElementById('Position').value;
  let nationality = document.getElementById('Nationality').value;
  let club = document.getElementById('club').value;
  let rating = document.getElementById('rating').value;
  let pace = document.getElementById('pace').value;
  let shooting = document.getElementById('shooting').value;
  let passing = document.getElementById('passing').value;
  let dribbling = document.getElementById('dribbling').value;
  let defending = document.getElementById('defending').value;
  let physical = document.getElementById('physical').value;
  let diving = document.getElementById('diving').value;
  let handling = document.getElementById('handling').value;
  let kicking = document.getElementById('kicking').value;
  let reflexes = document.getElementById('reflexes').value;
  let speed = document.getElementById('speed').value;
  let positioning = document.getElementById('positioning').value;
  let valid = true;

  const pattern = {
    name: /^[a-zA-Z\s]+$/,
    photo: /^https:\/\//,
    club: /^[a-zA-Z\s]+$/,
    nationality: /^https:\/\//,
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
    positioning: /^\d{1,2}$/
  };

  // Validation des champs avec mise à jour des erreurs
  let nameError = document.getElementById('nameeror');
  if (!pattern.name.test(name)) {
    nameError.innerText = "Le nom est invalide";
    valid = false;
  } else {
    nameError.innerText = "";
  }

  let photoError = document.getElementById('photoeror');
  if (!pattern.photo.test(photo)) {
    photoError.innerText = "Le lien est invalide";
    valid = false;
  } else {
    photoError.innerText = "";
  }
   let clubError = document.getElementById('cluberror');
   if (!pattern.club.test(club)) {
     clubError.innerText = "club invalid";
     valid = false;
   } else {
     clubError.innerText = "";
   }

  let natEror = document.getElementById('nateror');
  if (!pattern.nationality.test(nationality)) {
    natEror.innerText = "nationality invalid";
    valid = false;
  } else {
    natEror.innerText = "";
  }

  let ratEror = document.getElementById('rateror');
  if (!pattern.rating.test(rating)) {
    ratEror.innerText = "rating invalid";
    valid = false;
  } else {
    ratEror.innerText = "";
  }

  // let pacEror= document.getElementById('paceror');
  // if (!pattern.pace.test(pace)) {
  //   pacEror.innerText = "*";
  //   valid = false;
  // } else {
  //   pacEror.innerText = "";
  // }

  // let shotEror = document.getElementById('shoteror');
  // if (!pattern.pace.test(shooting)) {
  //   shotEror.innerText = "*";
  //   valid = false;
  // } else {
  //   shotEror.innerText = "";
  // }

 
  // let passinEror = document.getElementById('passineror');
  // if (!pattern.passing.test(passing)) {
  //   passinEror.innerText = "*";
  //   valid = false;
  // } else {
  //   passinEror.innerText = "";
  // }

  // let dribEror = document.getElementById('driberor');
  // if (!pattern.dribbling.test(dribbling)) {
  //   dribEror.innerText = "*";
  //   valid = false;
  // } else {
  //   dribEror.innerText = "";
  // }

  // let defEror = document.getElementById('deferor');
  // if (!pattern.defending.test(defending)) {
  //   defEror.innerText = "*";
  //   valid = false;
  // } else {
  //   defEror.innerText = "";
  // }  
  
  // let phyEror = document.getElementById('phyeror');
  // if (!pattern.physical.test(physical)) {
  //   phyEror.innerText = "*";
  //   valid = false;
  // } else {
  //   phyEror.innerText = "";
  // }  

  // let divEror = document.getElementById('diveror');
  // if (!pattern.diving.test(diving)) {
  //   divEror.innerText = "*";
  //   valid = false;
  // } else {
  //   divEror.innerText = "";
  // } 

  // let hanEror = document.getElementById('haneror');
  // if (!pattern.handling.test(handling)) {
  //   hanEror.innerText = "*";
  //   valid = false;
  // } else {
  //   hanEror.innerText = "";
  // }  
  
  // let kicEror = document.getElementById('kiceror');
  // if (!pattern.handling.test(kicking)) {
  //   kicEror.innerText = "*";
  //   valid = false;
  // } else {
  //   kicEror.innerText = "";
  // } 

  // let refEror = document.getElementById('referor');
  // if (!pattern.reflexes.test(reflexes)) {
  //   refEror.innerText = "*";
  //   valid = false;
  // } else {
  //   refEror.innerText = "";
  // } 

  // let spedEror= document.getElementById('spederor');
  // if (!pattern.speed.test(speed)) {
  //   spedEror.innerText = "*";
  //   valid = false;
  // } else {
  //   spedEror.innerText = "";
  // }
  
  // let posEror= document.getElementById('poseror');
  // if (!pattern.positioning.test(positioning)) {
  //   posEror.innerText = "*";
  //   valid = false;
  // } else {
  //   posEror.innerText = "";
  // } 

  if (valid) {
    let joueur = {
      name: name,
      photo: photo,
      position: position,
      nationality: nationality,
      club: club,
      rating: rating,
      pace: pace,
      shooting: shooting,
      passing: passing,
      dribbling: dribbling,
      defending: defending,
      physical: physical,
      diving: diving,
      handling: handling,
      kicking: kicking,
      reflexes: reflexes,
      speed: speed,
      positioning: positioning
    };
    tableaujouer.push(joueur);
    displayAllPlayers();
    document.getElementById('form').reset();
    document.getElementById('formulair').classList.add('hidden');

  }

  return valid; 
}

// Ajout par le formulaire
document.getElementById('submit').addEventListener('click', function (e) {
  e.preventDefault(); 
  const valid = validation();
  if (valid) {
    
  }
});




// cart  joueur
function cart(joueur) {
  return `
      <div class="relative w-36 h-52 flex flex-wrap justify-center ">
        <img src="../img/badge_gold.webp" alt="" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0  flex flex-col items-center justify-center text-white ">
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

// Fonction pour afficher tous les joueurs
function displayAllPlayers() {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";
  tableaujouer.forEach((joueur) => {
    container.insertAdjacentHTML("beforeend", cart(joueur));
  });

  
}



// filtre position
function filterPosition(position,pos) {
  const playersContainer = document.getElementById("players-container");
  playersContainer.innerHTML = "";
  const filteredPlayers = tableaujouer.filter(function (joueur) {
    return joueur.position === position;
  });
  filteredPlayers.forEach(function (joueur) {
    const playerDiv = document.createElement("div");
    playerDiv.classList.add("player-card");
    playerDiv.innerHTML = `
                <div class="relative w-36 h-52 flex flex-wrap justify-center ">
                  <img src="../img/badge_gold.webp" alt="" class="absolute inset-0 w-full h-full object-cover" />
                  <div class="absolute inset-0  flex flex-col items-center justify-center text-white ">
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

    if(pos == "st"){
      addPlayerToPos(playerDiv , document.getElementById('pos1'));
    }
    if(pos == "st2"){
      addPlayerToPos(playerDiv , document.getElementById('pos2'));
    }
    if(pos == "lw"){
      addPlayerToPos(playerDiv , document.getElementById('pos3'));
    }

    if(pos == "cm"){
      addPlayerToPos(playerDiv , document.getElementById('pos4'));
    }
    if(pos == "cm2"){
      addPlayerToPos(playerDiv , document.getElementById('pos5'));
    }
    if(pos == "rw"){
      addPlayerToPos(playerDiv , document.getElementById('pos6'));
    }
    if(pos == "lb"){
      addPlayerToPos(playerDiv , document.getElementById('pos7'));
    }
    if(pos == "cb"){
      addPlayerToPos(playerDiv , document.getElementById('pos8'));
    }
    if(pos == "cb2"){
      addPlayerToPos(playerDiv , document.getElementById('pos9'));
    }
    if(pos == "rb"){
      addPlayerToPos(playerDiv , document.getElementById('pos10'));
    }
    if(pos == "gk"){
      addPlayerToPos(playerDiv , document.getElementById('pos11'));
    }

    if(pos == "lwbnk"){
      addPlayerToPos(playerDiv , document.getElementById('bank1'));
    }
    if(pos == "lbbnk"){
      addPlayerToPos(playerDiv , document.getElementById('bank2'));
    }
    if(pos == "stbnk"){
      addPlayerToPos(playerDiv , document.getElementById('bank3'));
    }
    if(pos == "gkbnk"){
      addPlayerToPos(playerDiv , document.getElementById('bank4'));
    }
    if(pos == "cmbnk1"){
      addPlayerToPos(playerDiv , document.getElementById('bank5'));
    }
    if(pos == "cmbnk2"){
      addPlayerToPos(playerDiv , document.getElementById('bank6'));
    }
    if(pos == "rwbnk"){
      addPlayerToPos(playerDiv , document.getElementById('bank7'));
    }
    if(pos == "rbbnk"){
      addPlayerToPos(playerDiv , document.getElementById('bank8'));
    }
  });

  
}



document.getElementById("pos1").addEventListener("click", function () {
  document.getElementById("players-container").classList.remove('hidden');
  filterPosition("ST","st");
 
});
document.getElementById("pos2").addEventListener("click", function () {
  document.getElementById("players-container").classList.remove('hidden');
  filterPosition("ST","st2");
  
});
document.getElementById("pos3").addEventListener("click", function () {
  document.getElementById("players-container").classList.remove('hidden');
  filterPosition("LW","lw");
});
document.getElementById("pos4").addEventListener("click", function () {
  document.getElementById("players-container").classList.remove('hidden');
  filterPosition("CM","cm");
});
document.getElementById("pos5").addEventListener("click", function () {
  document.getElementById("players-container").classList.remove('hidden');
  filterPosition("CM","cm2");
});
document.getElementById("pos6").addEventListener("click", function () {
  document.getElementById("players-container").classList.remove('hidden');
  filterPosition("RW","rw");
});
document.getElementById("pos7").addEventListener("click", function () {
  document.getElementById("players-container").classList.remove('hidden');
  filterPosition("LB","lb");
});
document.getElementById("pos8").addEventListener("click", function () {
  document.getElementById("players-container").classList.remove('hidden');
  filterPosition("CB","cb");
});
document.getElementById("pos9").addEventListener("click", function () {
  document.getElementById("players-container").classList.remove('hidden');
  filterPosition("CB","cb2");
});
document.getElementById("pos10").addEventListener("click", function () {
  document.getElementById("players-container").classList.remove('hidden');
  filterPosition("RB","rb");
});
document.getElementById("pos11").addEventListener("click", function () {
  document.getElementById("players-container").classList.remove('hidden');
  filterPosition("GK","gk");
});


document.getElementById("bank1").addEventListener("click", function () {
  document.getElementById("players-container").classList.remove('hidden');
  filterPosition("LW","lwbnk");
});
document.getElementById("bank2").addEventListener("click", function () {
  document.getElementById("players-container").classList.remove('hidden');
  filterPosition("LB","lbbnk");
});
document.getElementById("bank3").addEventListener("click", function () {
  document.getElementById("players-container").classList.remove('hidden');
  filterPosition("ST","stbnk");
});
document.getElementById("bank4").addEventListener("click", function () {
  document.getElementById("players-container").classList.remove('hidden');
  filterPosition("GK","gkbnk");
});
document.getElementById("bank5").addEventListener("click", function () {
  document.getElementById("players-container").classList.remove('hidden');
  filterPosition("CM","cmbnk1");
});
document.getElementById("bank6").addEventListener("click", function () {
  document.getElementById("players-container").classList.remove('hidden');
  filterPosition("CM","cmbnk2");
});
document.getElementById("bank7").addEventListener("click", function () {
  document.getElementById("players-container").classList.remove('hidden');
  filterPosition("RW","rwbnk");
});
document.getElementById("bank8").addEventListener("click", function () {
  document.getElementById("players-container").classList.remove('hidden');
  filterPosition("RB","rbbnk");
});



function addPlayerToPos(card, poste) {
  card.addEventListener('click', function () {
    poste.parentElement.parentElement.parentElement.appendChild(card);
    poste.parentElement.parentElement.classList.add('hidden');
    document.getElementById("players-container").classList.add('hidden');
    card.classList.add("scale-[0.2]", "lg:scale-[0.7]");
    card.addEventListener('click', function () {
      card.remove();
      poste.parentElement.parentElement.classList.remove('hidden');
    });
  })
} 