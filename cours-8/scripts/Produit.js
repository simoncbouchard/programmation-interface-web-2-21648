export default class Produit {
    #_titre;
    #_sujet;
    #_prix;
    #_rabais;
    #_prixReduit;

    constructor(titre, sujet, prix, rabais) {
        this.#_titre = titre;
        this.#_sujet = sujet;
        this.#_prix = prix;
        this.#_rabais = rabais;
        if (rabais) this.#_prixReduit = this.#affichePrixReduit();

        // Mime un élément <div>
        document.body.innerHTML = '<div data-js-produits></div>';
        this._elProduits = document.querySelector('[data-js-produits]');
    }


    /**
     * Calcule et retourne le prix réduit et sa réduction
     * @returns 
     */
    #affichePrixReduit() {
        return `${parseInt(this.#_prix) - (parseInt(this.#_prix) * parseInt(this.#_rabais) / 100)} $ <small>(${this.#_rabais}%)</small>`;
    }


    /**
     * Défini et retourne le DOM générique d'un produit
     * @returns 
     */
    construitGenericDOM() {
        return `<p><small>Titre : </small>${this.#_titre}</p>
                <p><small>Sujet : </small>${this.#_sujet}</p>
                <p><small>Prix : </small>${this.#_rabais ? this.#_prixReduit : this.#_prix + ' $'}</p>`;
    }
}