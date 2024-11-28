
// afichage formule
document.querySelectorAll(".bg-gray-600.text-white.rounded-full.lg\\:w-10.w-5").forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('formulair').classList.remove('hidden');
});
});

// hide formule 
document.getElementById('hideForm').addEventListener('click', function() {
    document.getElementById('formulair').classList.add('hidden');
});


//carte 

    let name = document.getElementById('name').value; 
    let Position = document.getElementById('Position').value;
    let Club = document.getElementById('club').value;
    let Nationality = document.getElementById('Nationality').value;
    let rating = document.getElementById('rating').value;

    const positionSelect = document.getElementById('Position');
    const attributesDiv = document.getElementById('attributes');

    positionSelect.addEventListener('change', () => {
        const selectedPosition = positionSelect.value;

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




   
    // JSON 
    // fetch('players.json')
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         const container = document.getElementById('cards-container');
            
    //         data.players.forEach(player => {
               
    //             const card = document.createElement('div');
    //             card.className = 'bg-[url("../img/badge_gold.webp")]   bg-cover bg-center text-white p-4  ';


    //             // Ajouter le contenu de la carte
    //             card.innerHTML = `
    //                 <img src="${player.photo}" alt="${player.name}" class="w-full rounded-md mb-2 ">
    //                 <h3 class="text-lg font-bold">${player.name}</h3>
    //                 <p class="text-sm text-gray-400">Position: ${player.position}</p>
    //                 <p class="text-sm text-gray-400">Club: <img src="${player.logo}" alt="${player.club}" class="inline w-5 h-5 ml-1">${player.club}</p>
    //                 <p class="text-sm text-gray-400">Nationality: <img src="${player.flag}" alt="${player.nationality}" class="inline w-5 h-5 ml-1">${player.nationality}</p>
    //                 <p class="text-sm text-gray-400">Rating: <span class="text-yellow-400">${player.rating}</span></p>
    //                 <div class="grid grid-cols-3 gap-1 mt-2 text-xs">
    //                     <div class="text-center">Pace: ${player.pace}</div>
    //                     <div class="text-center">Shooting: ${player.shooting}</div>
    //                     <div class="text-center">Passing: ${player.passing}</div>
    //                     <div class="text-center">Dribbling: ${player.dribbling}</div>
    //                     <div class="text-center">Defending: ${player.defending}</div>
    //                     <div class="text-center">Physical: ${player.physical}</div>
    //                 </div>
    //             `;

    //             // Ajouter la carte au conteneur
    //             container.appendChild(card);
    //         });
    //     })

    
fetch("players.json")
.then((response) => response.json())
.then((data) => {
  for(let i = 0; i <7; i++){
  let jsonCartesHtml =`
   card.innerHTML = `
        <img src="${player.backgroundImage || '../img/badge_gold.webp'}" alt="Player Card Background"
            class="absolute inset-0 w-full h-full object-cover" />
        
        <div class="absolute inset-0 mb-2 flex flex-col items-center justify-center text-white p-2">
            <div class="flex items-center">
                <div class="flex flex-col justify-between items-center w-[10%] h-5">
                    <span class="text-sm font-bold text-yellow-600">${player.rating}</span>
                    <span class="text-sm font-semibold">${player.position}</span>
                </div>
                
                <div>
                    <img src="${player.photo}" alt="Profil" class="w-16 h-16 rounded-md" />
                </div>
            </div>

            <h3 class="text-center text-sm font-bold">${player.name}</h3>

            <div class="flex justify-between items-center w-[30%]">
                <div class="flex items-center">
                    <img src="${player.flag}" alt="Nationality" class="w-4 h-4 rounded-sm" />
                </div>
                <span class="w-5 h-5">${player.club}</span>
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
      `;

`
document.getElementById('bank').insertAdjacentHTML("beforeEnd", jsonCartesHtml);
}
})
       

