class Livre {
	#_auteurPrenom;
	#_auteurNom;
	#_nombrePages;
	#_pageActuelle;

	constructor(auteurPrenom, auteurNom, nombrePages, pageActuelle) {
		this.#_auteurPrenom = auteurPrenom;
        this.#_auteurNom = auteurNom;
		this.#_nombrePages = nombrePages;
        this.#_pageActuelle = pageActuelle || 1;
	}


	#concateneNom() {
        return `${this.#_auteurPrenom} ${this.#_auteurNom}`;
    };


    #calculeNombrePagesRestantes() {
        return parseInt(this.#_nombrePages) - parseInt(this.#_pageActuelle);
    }


	decrire() {
		return `Ce livre de ${this.#concateneNom()} a ${this.#_nombrePages} pages, je suis présentement rendu à la page ${this.#_pageActuelle}.`;
	}


	avancePage() {                        
		if (this.#_pageActuelle < this.#_nombrePages) {
			this.#_pageActuelle++;
		}
	}


	reculePage() {
		if (this.#_pageActuelle > 0) {
			this.#_pageActuelle--;
		}
	}


    get pageRestantes() {
        let nombrePagesRestantes;
        if (this._nombrePagesRestantes) nombrePagesRestantes = this._nombrePagesRestantes;
        else nombrePagesRestantes = this.#calculeNombrePagesRestantes();

        return nombrePagesRestantes;
    }


    set pageActuelle(nouvelleValeur) {
        this.#_pageActuelle = nouvelleValeur;
    }
};