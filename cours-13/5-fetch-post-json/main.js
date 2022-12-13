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
        let usager = {	
                        usager: elUsager.value, 
                        password: elPassword.value, 
                        nom: elNom.value, 
                        prenom: elPrenom.value
                    };


        /**
         * Redéfinition de quelques options pour la reqûete en POST avec une query string
         */
        let oOptions = { 
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(usager)
        };

        let requete = new Request('requeteFetch.php', oOptions);


         /**
         * Appel asynchrone fetch
         */
        //fetch('requeteFetch.php', oOptions)
        fetch(requete)
            .then(function(response) {
                if (response.ok) return response.text();
                else throw new Error('La réponse n\'est pas OK');
            })
            .then(function(data) {
                console.log(data);
				elFormWrapper.innerHTML += `<h3>Merci ${usager.usager} !</h3>`;
            })
            .catch(function(error) {
                console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
            });

	};
})();