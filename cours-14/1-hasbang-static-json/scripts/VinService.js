class VinService {
    #_elMain;

    constructor() {
        this.#_elMain = document.querySelector('main');

        this.afficheListeVins = this.afficheListeVins.bind(this);
        this.afficheCepages = this.afficheCepages.bind(this);
        this.accueil = this.accueil.bind(this);
    }


    /**
     * Récupère en asynchrone le fichier 'vins.json' et injecte la liste des vins
     */
    afficheListeVins() {

        this.appelFetch('data/vins.json')
            .then(function(data) {
                //console.log(data);

                if (data) {
                    let dom = '';
                    for (let i = 0, l = data.length; i < l; i++) {
                        dom += `<a href="#!/vins/${i}" data-js-id="0">${data[i].region}</a>`;
                    }
                    this.#_elMain.innerHTML = dom;
                } else {
                    this.#_elMain.innerHTML = '';
                }

            }.bind(this))
            .catch(function(err) {
                console.log(`Il y a eu un problème avec l'opération fetch: ${err.message}`);
            });
    };


    /**
     * Récupère en asynchrone le fichier 'vins.json' et injecte les informations associées à l'id
     * @param {*} id
     */
    afficheCepages(id) {
        this.appelFetch('data/vins.json')
            .then(function(data) {
                //console.log(data);

                let dom = '';

                if (id < data.length) {
                    dom = `<h3>Les cépages de la région ${data[id].region} sont :</h3>
                            <ul>`;

                    //console.log(data[id].cepages.length);
                    for (let i = 0, l = data[id].cepages.length; i < l; i++) {
                        dom += `<li>${data[id].cepages[i]}</li>`;
                    }
                    dom += '</ul>';

                    this.#_elMain.innerHTML = dom;

                } else {
                    this.#_elMain.innerHTML = '';
                }

            }.bind(this))
            .catch(function(err) {
                console.log(`Il y a eu un problème avec l'opération fetch: ${err.message}`);
            });
    };


    /**
     * Retourne la promesse de la fonction asynchrone
     * @param {String} ressource
     * @returns 
     */
    async appelFetch(ressource) {
        try {
            let reponse = await fetch(ressource);

            if (reponse.ok) return reponse.json();
            else throw new Error('La réponse n\'est pas OK');
        } catch(err) {
            return err.message;
        }
	};


    /**
     * La route ou la data sont inexistantes
     */
    accueil() {
        this.#_elMain.innerHTML = '';
    }
}

export const { afficheListeVins, afficheCepages, accueil } = new VinService();