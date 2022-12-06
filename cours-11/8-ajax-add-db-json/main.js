(function() {

	let elFormWrapper =  document.querySelector('[data-js-form-wrapper]'),
		elForm = elFormWrapper.querySelector('[data-js-form]'),
		elUsager = elForm.usager,
		elPassword = elForm.password,
		elNom = elForm.nom,
		elPrenom = elForm.prenom,
		elBtn = elForm.querySelector('[data-js-btn]');


	elBtn.addEventListener('click', function(e) {
		e.preventDefault();

		// Validation FRONT
		//if (validation.isValid) { 
			elForm.classList.add('sent');
			elBtn.disabled = true;
			//add loader
			appelAJAX();
		//}
	});


	function appelAJAX() {
		// Déclaration de l'objet XMLHttpRequest
		let xhr;
		xhr = new XMLHttpRequest();
		
		// Initialisation de la requète
		if (xhr) {

			
			
		
		}
	}
})();