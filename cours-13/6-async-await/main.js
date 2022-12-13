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


            /**
             * Appel de la fonction asynchrone appelFetch
             */
            appelFetch({
                usager: elUsager.value, 
                password: elPassword.value, 
                nom: elNom.value, 
                prenom: elPrenom.value
            })
                .then(function(data) {
                    console.log(data);
                    elFormWrapper.innerHTML += `<h3>Merci ${elUsager.value} !</h3>`;
                })
                .catch(function(error) {
                    console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
                });
        //}
    });


    /**
     * Retourne la promesse de la fonction asynchrone
     * @param {Object} data 
     * @returns 
     */
    async function appelFetch(data) {

        try {

            let response = await fetch('requeteFetch.php', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) return response.text();
            else throw new Error('La réponse n\'est pas OK');

        } catch (error) {
            return error.message;
        }
	};
})();