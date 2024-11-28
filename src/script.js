// function affichercnt() {
//     let div = document.getElementById("form");
//     div.style.display = "block";
// }

// document.document.querySelectorAll(".bg-gray-600 text-white rounded-full lg:w-10 w-5").addEventListener('click', function() {
//     document.getElementById('formulair').classList.remove('hidden'); 
// });

document.querySelectorAll(".bg-gray-600.text-white.rounded-full.lg\\:w-10.w-5").forEach(function(button) {
    button.addEventListener('click', function() {
        document.getElementById('formulair').classList.remove('hidden'); 
    });
});


document.getElementById('hideForm').addEventListener('click', function() {
    document.getElementById('formulair').classList.add('hidden'); 
});



























// document.addEventListener("DOMContentLoaded", () => {
//     const playerForm = document.getElementById("playerForm");
//     const playerList = document.getElementById("playerList");
  
//     // Charger les joueurs existants depuis le fichier JSON
//     fetch("players.json")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Erreur lors du chargement du fichier JSON");
//         }
//         return response.json();
//       })
//       .then((players) => {
//         // Afficher les joueurs dans la liste
//         displayPlayers(players);
  
//         // Ajouter un nouvel événement pour soumettre un joueur
//         playerForm.addEventListener("submit", (e) => {
//           e.preventDefault();
  
//           // Récupérer les données du formulaire
//           const name = document.getElementById("name").value;
//           const age = parseInt(document.getElementById("age").value);
//           const position = document.getElementById("position").value;
  
//           // Ajouter un nouveau joueur
//           const newPlayer = { name, age, position };
//           players.push(newPlayer);
  
//           // Mettre à jour l'affichage
//           displayPlayers(players);
  
//           // Réinitialiser le formulaire
//           playerForm.reset();
  
//           // Sauvegarder les données mises à jour (si nécessaire)
//           savePlayers(players);
//         });
//       })
//       .catch((error) => console.error(error));
  
//     // Fonction pour afficher les joueurs
//     function displayPlayers(players) {
//       playerList.innerHTML = ""; // Réinitialiser la liste
//       players.forEach((player, index) => {
//         const li = document.createElement("li");
//         li.textContent = `${index + 1}. ${player.name}, ${player.age} ans, ${player.position}`;
//         playerList.appendChild(li);
//       });
//     }
  
//     // Fonction pour sauvegarder les données mises à jour (si nécessaire)
//     function savePlayers(players) {
//       // Note : La sauvegarde sur un fichier JSON nécessite un serveur !
//       console.log("Données mises à jour :", JSON.stringify(players, null, 2));
//     }
//   });
  