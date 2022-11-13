class BandeDessinee extends Livre {
    #_pays;

    constructor(auteurPrenom, auteurNom, nombrePage, pageActuelle, pays) {
        super(auteurPrenom, auteurNom, nombrePage, pageActuelle);

        this.#_pays = pays;
    }


    get pays() {
        return this.#_pays;
    }
}