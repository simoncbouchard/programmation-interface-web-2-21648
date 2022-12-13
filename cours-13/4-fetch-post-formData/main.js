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
        //if (validation.estValide) { 
            elForm.classList.add('sent');
            elBtn.disabled = true;
            // loader
            appelFetch();
        //}
    });


    function appelFetch() {

        /**
         * Récupère les valeurs du formulaire
         */
        let usager = elUsager.value,
            password = elPassword.value,
            nom = elNom.value,
            prenom = elPrenom.value,
            encodedUsager = encodeURIComponent(usager),
            encodedPassword = encodeURIComponent(password),
            encodedNom = encodeURIComponent(nom),
            encodedPrenom = encodeURIComponent(prenom);

        /**
         * Initialise les options de l'appel fecth et l'objet FormData
         */
        let oOptions = { method: 'POST' },
            formData = new FormData();
            
        /**
         * Construit les valeur de l'objet formData
         */
        formData.append('usager', encodedUsager);
        formData.append('password', encodedPassword);
        formData.append('nom', encodedNom);
        formData.append('prenom', encodedPrenom);
        

        /**
         * Assigne l'objet formData à la clef body des options de l'appel fetch
         */
        oOptions.body = formData;


        /**
         * Appel asynchrone fetch
         */
        fetch('requeteFetch.php', oOptions)
            .then(function(response) {
                if (response.ok) return response.text();
                else throw new Error('La réponse n\'est pas OK');
            })
            .then(function(data) {
                console.log(data);
				elFormWrapper.innerHTML += `<h3>Merci ${usager} !</h3>`;
            })
            .catch(function(error) {
                console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
            });

	};
})();