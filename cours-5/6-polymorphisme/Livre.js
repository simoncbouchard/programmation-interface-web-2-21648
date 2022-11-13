class Livre {
	#_auteurPrenom;
	#_auteurNom;
	#_nombrePage;
	#_pageActuelle;

	constructor(auteurPrenom, auteurNom, nombrePage, pageActuelle) {
		this.#_auteurPrenom = auteurPrenom;
        this.#_auteurNom = auteurNom;
		this.#_nombrePage = nombrePage;
        this.#_pageActuelle = pageActuelle || 1;
	}


	decrire() {
		return `Ce livre de ${this.auteur} a ${this.#_nombrePage} pages, je suis présentement rendu à la page ${this.#_pageActuelle}.`;
	}


	avancePage() {                        
		if (this.#_pageActuelle < this.#_nombrePage) {
			this.#_pageActuelle++;
		}
	}


	reculePage() {
		if (this.#_pageActuelle > 0) {
			this.#_pageActuelle--;
		}
	}


	get auteur() {
		return `${this.#_auteurPrenom} ${this.#_auteurNom}`;
	} 


	get nombrePage() {
		return this.#_nombrePage;
	}


	get pageActuelle() {
		return this.#_pageActuelle;
	}
};