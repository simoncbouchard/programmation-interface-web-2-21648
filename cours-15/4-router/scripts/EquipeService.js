class EquipeService {
    constructor() {
		this._elJoueurs = document.querySelector('[data-js-joueurs]');
        
        // Lie le contexte de la méthode exportée getJoueursParEquipe au this de l'instance de la classe
        this.getJoueursParEquipe = this.getJoueursParEquipe.bind(this);
    }


    getJoueursParEquipe(id) {

        /**
         * Gestion de l'option selected
         */
        let elOptionSelected = document.querySelector(`[data-js-equipes] option[value="${id}"]`);
        if (elOptionSelected) elOptionSelected.selected = true;


        /**
         * Gestion asynchrone
         */
        let encodedId = encodeURIComponent(id);
        
        fetch(`requetes/requeteAsync.php?id=${id}`)
            .then (function(response) {
                return response.json();
            }.bind(this))
            .then (function(data) {

                //console.log(data);

                let dom = '';

                // Est-ce qu'il y a des joueurs dans cette équipe
                if (data.length === 0) {
                    if (elOptionSelected) dom = '<p>Cette équipe n\'a aucun joueur.</p>';
                    else dom = '<p>Cette équipe n\'existe pas.</p>';
                } else {
                    dom = '<ul>';
                    for (let key in data) {
                        dom += `<li>${data[key].prenom} ${data[key].nomFamille}</li>`;
                    }
                    dom += '</ul>';
                }

                this._elJoueurs.innerHTML = dom;
            }.bind(this))
            .catch (function(error) {
                console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
            }.bind(this));
    }
}

export const { getJoueursParEquipe } = new EquipeService();