(function() {
	
	let elEquipes = document.querySelector('[data-js-equipes]');

	elEquipes.addEventListener('submit', function(e) {
		e.preventDefault();
		if (e.target.children[1].value != '') appelAJAX(e.target)
	});


	function appelAJAX(elForm){
		// Déclaration de l'objet XMLHttpRequest
		let xhr;
		xhr = new XMLHttpRequest();

		// Initialisation de la requète
		if (xhr) {	
			
			let elLabel = elForm.querySelector('label'),
				elInput = elForm.querySelector('input'),
				data = {
					nomEquipe: elInput.value,
					idEquipe: elForm.dataset.jsEquipe
				};


			xhr.open('PUT', 'requeteAJAX.php');
			xhr.setRequestHeader('Content-Type', 'application/json');

			// Ouverture de la requète : fichier recherché
			xhr.addEventListener('readystatechange', function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {

						// Traitement du DOM
						elLabel.textContent = `${data.nomEquipe} :`;
						elInput.value = '';

					} else if (xhr.status === 404) {
						console.log('Le fichier appelé dans la méthode open() n\'existe pas.');
					}
				}
			});

			// Envoi de la requète
			xhr.send(JSON.stringify(data));

		}
	}
})();