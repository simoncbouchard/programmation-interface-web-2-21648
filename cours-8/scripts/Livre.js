import Produit from './Produit.js';


export default class Livre extends Produit {
    #_auteur;
    #_editeur;
    #_pages;

    constructor(livre) {
        super(livre.titre, livre.sujet, livre.prix, livre.rabais);
        this.#_auteur = livre.auteur;
        this.#_editeur = livre.editeur;
        this.#_pages = livre.pages;

        this.#injecteDOM();
    }


    /**
     * Injecte le DOM du livre
     */
    #injecteDOM() {
        let dom = `<div>
                        ${this.construitGenericDOM()}
                        <p><small>Auteur : </small>${this.#_auteur}</p>
                        <p><small>Éditeur : </small>${this.#_editeur}</p>
                        <p><small>Pages : </small>${this.#_pages}</p>
                    </div>`;

        this._elProduits.insertAdjacentHTML('beforeend', dom);
    }


    get auteur() {
        return this.#_auteur;
    }
}