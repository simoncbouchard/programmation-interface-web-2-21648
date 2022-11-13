class BandeDessinee extends Livre {
    #_pays;

    constructor(auteurPrenom, auteurNom, nombrePage, pageActuelle, pays) {
        super(auteurPrenom, auteurNom, nombrePage, pageActuelle);

        this.#_pays = pays;
    }


    decrire() {
		return `Ce${this.#_pays == 'Japon' ? ' manga' : 'tte bande dessinée'} de ${this.auteur} a ${this.nombrePage}, je suis présentement rendu à la page ${this.pageActuelle}.`;
	}
}