class Numerique extends Livre {
    #_format;
    #_nombreAppareils;

    constructor(auteurPrenom, auteurNom, nombrePage, pageActuelle, format, nombreAppareils) {
        super(auteurPrenom, auteurNom, nombrePage, pageActuelle);

        this.#_format = format;
        this.#_nombreAppareils = nombreAppareils;
    }


    decrire() {
        return `Ce livre de ${this.auteur} sur format ${this.#_format} a ${this.nombrePage}, je suis présentement rendu à la page ${this.pageActuelle}. Je peux lire ce livre numérique sur encore ${this.#_nombreAppareils} appareil${this.#_nombreAppareils > 1 ? 's' : ''}.`;
    }


    enleveAppareil() {                        
		if (this.#_nombreAppareils > 0) {
			this.#_nombreAppareils--;
		}
	}
}