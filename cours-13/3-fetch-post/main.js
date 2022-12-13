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
         * Redéfinition de quelques options pour la reqûete en POST avec une query string
         */
        let oOptions = { 
            method: 'POST',
            headers: {
              'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: 'usager=' + encodedUsager + '&password=' + encodedPassword + '&nom=' + encodedNom + '&prenom=' + encodedPrenom
        };


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