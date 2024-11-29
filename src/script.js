
// afichage formule
document.querySelectorAll(".w-full.py-2.bg-black.text-white.font-bold.rounded-lg.hover\\:bg-gray-600.transition-all.duration-200").forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('formulair').classList.remove('hidden');
});
});

// hide formule 
document.getElementById('hideForm').addEventListener('click', function() {
    document.getElementById('formulair').classList.add('hidden');
});


//model change gk

    let name = document.getElementById('name').value; 
    let Position = document.getElementById('Position').value;
    let Club = document.getElementById('club').value;
    let Nationality = document.getElementById('Nationality').value;
    let rating = document.getElementById('rating').value;

    let positionSelect = document.getElementById('Position');
    let attributesDiv = document.getElementById('attributes');

    positionSelect.addEventListener('change', () => {
        let selectedPosition = positionSelect.value;

        if (selectedPosition === 'GK') {
            attributesDiv.innerHTML = `
                <div class="flex">
                    <h3 class="text-white">Diving</h3>
                    <input type="number" id="diving" name="diving" class="w-14 h-8 p-2 mb-4 rounded-md bg-gray-200">

                    <h3 class="text-white">Handling</h3>
                    <input type="number" id="handling" name="handling" class="w-14 h-8 p-2 mb-4 rounded-md bg-gray-200">

                    <h3 class="text-white">Kicking</h3>
                    <input type="number" id="kicking" name="kicking" class="w-14 h-8 p-2 mb-4 rounded-md bg-gray-200">
                </div>
                <div class="flex">
                    <h3 class="text-white">Reflexes</h3>
                    <input type="number" id="reflexes" name="reflexes" class="w-14 h-8 p-2 mb-4 rounded-md bg-gray-200">

                    <h3 class="text-white">Speed</h3>
                    <input type="number" id="speed" name="speed" class="w-14 h-8 p-2 mb-4 rounded-md bg-gray-200">

                    <h3 class="text-white">Physical</h3>
                    <input type="number" id="physical" name="physical" class="w-14 h-8 p-2 mb-4 rounded-md bg-gray-200">
                </div>
            `;
        } else {
            attributesDiv.innerHTML = `
                <div class="flex">
                    <h3 class="text-white">Pace</h3>
                    <input type="number" id="pace" name="pace" class="w-14 h-8 p-2 mb-4 rounded-md bg-gray-200">

                    <h3 class="text-white">Shooting</h3>
                    <input type="number" id="shooting" name="shooting" class="w-14 h-8 p-2 mb-4 rounded-md bg-gray-200">

                    <h3 class="text-white">Passing</h3>
                    <input type="number" id="passing" name="passing" class="w-14 h-8 p-2 mb-4 rounded-md bg-gray-200">
                </div>
                <div class="flex">
                    <h3 class="text-white">Dribbling</h3>
                    <input type="number" id="dribbling" name="dribbling" class="w-14 h-8 p-2 mb-4 rounded-md bg-gray-200">

                    <h3 class="text-white">Defending</h3>
                    <input type="number" id="defending" name="defending" class="w-14 h-8 p-2 mb-4 rounded-md bg-gray-200">

                    <h3 class="text-white">Physical</h3>
                    <input type="number" id="physical" name="physical" class="w-14 h-8 p-2 mb-4 rounded-md bg-gray-200">
                </div>
            `;
        }
    });




//  JSON
    fetch("players.json")
    .then((response) => response.json()) 
    .then((data) => {
      const container = document.getElementById('cards-container'); 
  
      data.players.forEach(player => {
        
        let jsonCartesHtml = `
          <div class="relative w-36 h-52 flex flex-wrap justify-center gap-4 ">
            <img src="${player.backgroundImage || '../img/badge_gold.webp'}" alt="" class="absolute inset-0 w-full h-full object-cover" />
  
            <div class="absolute inset-0 mb-2 flex flex-col items-center justify-center text-white p-2">
                <div class="flex items-center">
                    <div class="flex flex-col justify-between items-center w-[10%] h-5">
                        <span class="text-sm font-bold text-yellow-600">${player.rating}</span>
                        <span class="text-sm font-semibold">${player.position}</span>
                    </div>
  
                    <div>
                        <img src="${player.photo}" alt="" class="w-16 h-16 rounded-md" />
                    </div>
                </div>
  
                <h3 class="text-center text-sm font-bold">${player.name}</h3>
  
                 <div class="flex justify-between items-center ">
                    <div class="flex items-center">
                        <img src="${player.flag}" alt="Nationality" class="w-4 h-4 rounded-sm" />
                    </div>
                    <span class="block text-center text-xs">${player.club}</span>
                </div>
  
                <div class="flex flex-col text-xs w-full px-2 h-16">
                    <div class="flex justify-around">
                        <span>PAC:</span>
                        <span>${player.pace}</span>
  
                        <span>SHO:</span>
                        <span>${player.shooting}</span>
                    </div>
                    <div class="flex justify-around">
                        <span>PAS:</span>
                        <span>${player.passing}</span>
  
                        <span>DRI:</span>
                        <span>${player.dribbling}</span>
                    </div>
                    <div class="flex justify-around">
                        <span>DEF:</span>
                        <span>${player.defending}</span>
  
                        <span>PHY:</span>
                        <span>${player.physical}</span>
                    </div>
                </div>
            </div>
          </div>
        `;
  
        
        container.insertAdjacentHTML("beforeEnd", jsonCartesHtml);
      });
    })


    // //ajout cart
    // function createPlayer(event) {
    //     let name = document.getElementById('name').value; 
    //     let Position = document.getElementById('Position').value;
    //     let Club = document.getElementById('club').value;
    //     let Nationality = document.getElementById('Nationality').value;
    //     let rating = document.getElementById('rating').value;

       
    //     ////////////////////////////////////////////////////////////////
    //     let paceStates = document.getElementById('Pace').value;
    //     let shootStates = document.getElementById('shooting').value;
    //     let passStates = document.getElementById('passing').value;
    //     let dribStates = document.getElementById('dribbling').value;
    //     let defStates = document.getElementById('defending').value;
    //     let phyStates = document.getElementById('physical').value;
    //     ////////////////////////////////////////////////////////////////    
    //     let divStates = document.getElementById('diving').value;
    //     let handStates = document.getElementById('handling').value;
    //     let kickStates = document.getElementById('kicking').value;
    //     let refStates = document.getElementById('reflex').value;
    //     let spdStates = document.getElementById('speed').value;
    //     let posStates = document.getElementById('positioning').value;
    
    //     //let rating = document.getElementById('').value;
        
    //     let createdCard = `
    //     <div class="relative w-36 h-52">
    //         <img src="./img/player-carte-removebg-preview.png" alt="Player Card Background"
    //             class="absolute inset-0 w-full h-full object-cover" />
    
     
    //         <div class="absolute inset-0 mb-2 flex flex-col items-center justify-center text-white p-2">
    
    //             <div class="flex items-center">
    //                 <div class="flex flex-col justify-between items-center w-[10%] h-5">
    //                     <span class="text-sm font-bold">
    //                         <span class="text-yellow-600"></span>90</span>
    //                     <span class="text-S font-semibold">${Position}</span>
    //                 </div>
    
    
    //                 <div class="">
    //                     <img src="${Image}" alt="Player"
    //                         class="w-16 h-16 rounded-md" />
    //                 </div>
    //             </div>
    
    
    //             <h3 class="text-center text-sm font-bold">${name}</h3>
    
    
    //             <div class="flex justify-between items-center w-[30%]">
    //                 <div class="flex items-center">
    //                     <img src="${Flag}" alt="" class="w-4 h-4 rounded-sm" />
    //                 </div>
    //                 <img src="${playerLogo}" alt="Club" class="w-5 h-5" />
    //             </div>
    
    
    //             ${position === "GK" ? ` <div class="flex flex-col text-xs w-full px-2 h-16">
    //                 <div class="flex justify-around">
    //                     <span>DIV:</span>
    //                     <span>${divStates}</span>
    
    //                     <span>HAN:</span>
    //                     <span>${handStates}</span>
    //                 </div>
    //                 <div class="flex justify-around">
    //                     <span>KIC:</span>
    //                     <span>${kickStates}</span>
    
    //                     <span>REF:</span>
    //                     <span>${refStates}</span>
    //                 </div>
    //                 <div class="flex justify-around">
    //                     <span>SPE:</span>
    //                     <span>${spdStates}</span>
    
    //                     <span>PHY:</span>
    //                     <span>${posStates}</span>
    //                 </div>`
                    
                    
    //                 : 
    
    
                    
    //                 `<div class="flex flex-col text-xs w-full px-2 h-16">
    //                 <div class="flex justify-around">
    //                     <span>PAC:</span>
    //                     <span>${paceStates}</span>
    
    //                     <span>SHO:</span>
    //                     <span>${shootStates}</span>
    //                 </div>
    //                 <div class="flex justify-around">
    //                     <span>PAS:</span>
    //                     <span>${passStates}</span>
    
    //                     <span>DRI:</span>
    //                     <span>${dribStates}</span>
    //                 </div>
    //                 <div class="flex justify-around">
    //                     <span>DEF:</span>
    //                     <span>${defStates}</span>
    
    //                     <span>PHY:</span>
    //                     <span>${phyStates}</span>
    //                 </div>
    //             </div>`}
                
    //         </div>
    //   `;
    
    //     document.getElementById('bank').insertAdjacentHTML("beforeEnd", createdCard);
    // }


    
    // Références aux éléments
// const form = document.getElementById('form');
// const playersContainer = document.getElementById('playersContainer');
// const hideFormBtn = document.getElementById('hideForm');
// const formulaireOverlay = document.getElementById('formulair');

// Fonction pour générer une carte de joueur
function createPlayerCard(player) {
    const card = document.createElement('div');
    card.className = 'bg-gray-800 text-white p-4 rounded-lg w-64 shadow-lg';

    card.innerHTML = `
        <div class="flex justify-between items-center mb-4">
            <img src="${player.flag}" alt="${player.nationality}" class="w-8 h-8 rounded-full">
            <span class="text-sm">${player.nationality}</span>
        </div>
        <img src="${player.photo}" alt="${player.name}" class="w-full rounded-md mb-4">
        <h2 class="text-lg font-bold text-center mb-2">${player.name}</h2>
        <p class="text-center mb-2">Position : ${player.position}</p>
        <div class="flex justify-between items-center text-sm">
            <span>Club :</span>
            <img src="${player.logo}" alt="${player.club}" class="w-8 h-8 rounded-full">
        </div>
        <div class="text-center mt-4">
            <p>Note globale : <strong>${player.rating}</strong></p>
        </div>
        <div class="grid grid-cols-2 gap-2 mt-4">
            <p>Pace: ${player.pace}</p>
            <p>Shooting: ${player.shooting}</p>
            <p>Passing: ${player.passing}</p>
            <p>Dribbling: ${player.dribbling}</p>
            <p>Defending: ${player.defending}</p>
            <p>Physical: ${player.physical}</p>
        </div>
    `;
    return card;
}

//
form.addEventListener('playedCreate', function (e) {
    e.preventDefault(); 

    
    const player = {
        name: document.getElementById('name').value,
        photo: document.getElementById('photo').value,
        position: document.getElementById('position').value,
        nationality: document.getElementById('nationality').value,
        flag: document.getElementById('flag').value,
        club: document.getElementById('club').value,
        logo: document.getElementById('logo').value,
        rating: parseInt(document.getElementById('rating').value),
        pace: parseInt(document.getElementById('pace').value),
        shooting: parseInt(document.getElementById('shooting').value),
        passing: parseInt(document.getElementById('passing').value),
        dribbling: parseInt(document.getElementById('dribbling').value),
        defending: parseInt(document.getElementById('defending').value),
        physical: parseInt(document.getElementById('physical').value)
    };

    // Création et ajout de la carte
    const playerCard = createPlayerCard(player);
    playersContainer.appendChild(playerCard);

    // Réinitialisation du formulaire et fermeture de la fenêtre
    form.reset();
    formulaireOverlay.classList.add('hidden');
});

// Gestion du bouton "Quitter"
hideFormBtn.addEventListener('click', function () {
    formulaireOverlay.classList.add('hidden');
});

     
    
    