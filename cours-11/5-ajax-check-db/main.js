(function() {

	let elForm = document.querySelector('[data-js-form]'),
		elInputUsager = elForm.usager,
		elDisponible = document.querySelector('[data-js-disponible]');
	

	elInputUsager.addEventListener('blur', function() {

		if (elInputUsager.value != '') {
	
			// Déclaration de l'objet XMLHttpRequest
			let xhr;
			xhr = new XMLHttpRequest();
			
			// Initialisation de la requète
			if (xhr) {

				let usager = elInputUsager.value,
					encodedUsager = encodeURIComponent(usager);

				// Ouverture de la requète : fichier recherché + paramètre(s) dans l'URL
				xhr.open('GET', 'requeteAJAX.php?usager=' + encodedUsager);
						
				// Écoute l'objet XMLHttpRequest instancié et défini le comportement en callback
				xhr.addEventListener('readystatechange', function() {
					
					if (xhr.readyState === 4) {
						if (xhr.status === 200) {

							//console.log(xhr.response)
							
							// Traitement du DOM
							if (xhr.response == 'Disponible') {
								elDisponible.setAttribute('class', 'available');
							} else {
								elDisponible.setAttribute('class', 'taken');
							}

							elDisponible.textContent = xhr.response;

						} else if (xhr.status === 404) {
							console.log('Le fichier appelé dans la méthode open() n\'existe pas.');
						}
					}
				});
				
				// Envoi de la requète	
				xhr.send();

			}
		}
	});
})();	



