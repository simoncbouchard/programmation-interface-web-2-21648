(function() {

    let elButton = document.querySelector('[data-js-btn]'),
        elReponse = document.querySelector('[data-js-reponse]');


    elButton.addEventListener('click', function() {

        // Déclaration de l'objet XMLHttpRequest
		let xhr;
		xhr = new XMLHttpRequest();
		
		// Initialisation de la requète
		if (xhr) {
            
            
            
            
		}
    });


    /**
     * Vérifie le format JSON
     * reférence : https://stackoverflow.com/questions/3710204/how-to-check-if-a-string-is-a-valid-json-string
     * @param {string} string 
     * @returns 
     */
    function estJson(string) {
        let estJson = true;
        try {
            JSON.parse(string);
        } catch (e) {
            estJson = false;
        }
        return estJson;
    }

})();