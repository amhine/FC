
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




    document.getElementById('loadPlayer').addEventListener('click', () => {
        // Fetch data from the JSON file
        fetch('players.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement des données');
                }
                return response.json();
            })
            .then(data => {
                // Assume we want the first player for demonstration
                const player = data.players[0];

                // Fill the form with player data
                document.getElementById('name').value = player.name;
                document.getElementById('Position').value = player.position;
                document.getElementById('club').value = player.club;
                document.getElementById('Nationality').value = player.nationality;
                document.getElementById('rating').value = player.rating;
                document.getElementById('pace').value = player.pace;
                document.getElementById('shooting').value = player.shooting;
                document.getElementById('passing').value = player.passing;
            })
            .catch(error => console.error('Erreur :', error));
    });