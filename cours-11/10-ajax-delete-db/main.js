(function() {
	
	let elEquipes = document.querySelector('[data-js-equipes]');

	elEquipes.addEventListener('submit', function(e) {
		e.preventDefault();
		appelAJAX(e.target);
	});


	function appelAJAX(elForm) {

		let data = { idEquipe: elForm.dataset.jsEquipe };


		// Déclaration de l'objet XMLHttpRequest
		let xhr;
		xhr = new XMLHttpRequest();

		// Initialisation de la requète
		if (xhr) {	

			xhr.open('DELETE', 'requeteAJAX.php');
			xhr.setRequestHeader('Content-Type', 'application/json');

			// Ouverture de la requète : fichier recherché
			xhr.addEventListener('readystatechange', function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {

						//console.log(xhr.response);

						// Traitement du DOM
						//if (xhr.response != 'Erreur id') elParent.parentNode.removeChild(elParent);
						if (xhr.response != 'Erreur id') elForm.remove();

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