class Numerique extends Livre {
    #_format;
    #_nombreAppareils;

    constructor(auteurPrenom, auteurNom, nombrePage, pageActuelle, format, nombreAppareils) {
        super(auteurPrenom, auteurNom, nombrePage, pageActuelle);

        this.#_format = format;
        this.#_nombreAppareils = nombreAppareils;
    }


    enleveAppareil() {                        
		if (this.#_nombreAppareils > 0) {
			this.#_nombreAppareils--;
		}
	}


    get format() {
        return this.#_format;
    }

    
    get nombreAppareils() {
        return this.#_nombreAppareils;
    }
}