class EquipeService {
    #_elMain;

    constructor() {
        this.#_elMain = document.querySelector('main');
        this.getJoueursParEquipe = this.getJoueursParEquipe.bind(this);
        this.accueil = this.accueil.bind(this);
    }


    /**
     * Récupère en asynchrone les joueurs associés à une équipe
     * @param {string} id 
     */
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

        fetch(`requetes/requeteAsync.php?id=${encodedId}`)
            .then(function(reponse) {
                if (reponse.ok) return reponse.json();
                else throw new Error('La réponse n\'est pas OK');
            })
            .then(function(data) {
                //console.log(data);

                if (data) {
                    let elListeJoueurs = document.querySelector('[data-js-liste-joueurs]');

                    if (elListeJoueurs) this.#supprimeListeJoueurs(elListeJoueurs, data);
                    else this.#afficheListeJoueurs(data);

                } else {
                    this.accueil();
                }
            }.bind(this))
            .catch (function(err) {
                console.log(`Il y a eu un problème avec l'opération fetch: ${err.message}`);
            });
    }


    /**
     * Gestion de l'animation de sortie et suppression de l'élément
     * S'il y a un objet data, appelle la méthode pour son injection
     * @param {HTMLElement} el 
     * @param {Object} data 
     */
    #supprimeListeJoueurs(el, data) {
        el.classList.add('hidden');

        /**
         * Écoute l'événement 'transitionend' avant de supprimer l'élément 
         * S'il y a un objet data, lance l'injection du nouvel élément
         */
        el.addEventListener('transitionend', function(e) {
            //console.log('Transition ended');

            // https://stackoverflow.com/questions/18689031/transitionend-event-fires-twice
            if (e.propertyName == 'opacity') { 
                el.remove();
                if (data) this.#afficheListeJoueurs(data);
            }
        }.bind(this));
    }


    /**
     * Injecte dans le DOM la liste des joueurs associés à l'équipe
     * @param {*} data 
     */
    #afficheListeJoueurs(data) {

        //console.log(data)

        let dom = '<div class="players-list hidden" data-js-liste-joueurs>';

        if (data.length === 0) {
            dom += '<p>Cette équipe n\'a aucun joueur.</p>';
        } else {
            dom += '<ul>';
            for (let key in data) {
                dom += `<li data-js-player="${data[key].id}">${data[key].prenom} ${data[key].nomFamille}</li>`;
            }
            dom += '</ul>';
        }
        dom += '</div>';


        this.#_elMain.insertAdjacentHTML('beforeend', dom);

        let elListeJoueurs = document.querySelector('[data-js-liste-joueurs]');

        setTimeout(function() {
            if (elListeJoueurs.classList.contains('hidden')) {
                elListeJoueurs.classList.remove('hidden');
            }
        }, 50);
    }


    /**
     * La route ou la data sont inexistantes
     */
    accueil() {
        document.querySelector(`[data-js-equipes] option[value="0"]`).selected = true;
        let elListeJoueurs = document.querySelector('[data-js-liste-joueurs]');
        if (elListeJoueurs) this.#supprimeListeJoueurs(elListeJoueurs, {});
    }
} 

export const { getJoueursParEquipe, accueil } = new EquipeService();