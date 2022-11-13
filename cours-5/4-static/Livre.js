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


    static decrire(auteurPrenom, auteurNom, nombrePages, pageActuelle) {
        //return `Ce livre de ${this.#concateneNom()} a ${this.#_nombrePages} pages, je suis présentement rendu à la page ${this.#_pageActuelle}.`;
        return `Ce livre de ${auteurPrenom} ${auteurNom} a ${nombrePages} pages, je suis présentement rendu à la page ${pageActuelle}.`;
    }


    #concateneNom() {
        return `${this.#_auteurPrenom} ${this.#_auteurNom}`;
    };
};