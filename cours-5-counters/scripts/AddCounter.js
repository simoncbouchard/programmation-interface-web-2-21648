class AddCounter {
    constructor(el) {
        this._el = el;
        this._elAddCounter = this._el.firstElementChild;
        this._elCounters = this._el.querySelector('[data-js-counters]');

        this.init();
    }


    /**
     * Initialise les comportements
     */
    init() {
        this._elAddCounter.addEventListener('click', this.ajouterCompteur.bind(this));
    }


    /**
     * Ajoute le DOM et lance les comportements du nouveau compteur
     */
    ajouterCompteur() {
        let domCompteur = `
                            <div class="counter" data-js-counter>
                                <span data-js-number>0</span>
                                <div data-js-operations>
                                    <button data-js-action="minus">-</button>
                                    <button data-js-action="plus">+</button>
                                </div>
                            </div>
                            `;

        this._elCounters.insertAdjacentHTML('beforeend', domCompteur);
        //this._elCounters.innerHTML += domCompteur;        // redessinne le DOM du noeud parent
        //this._elCounters.appendChild(domCompteur);        // n'accepte pas le type string
        //this._elCounters.append(domCompteur);             // ne formate pas les balises HTML
        new Counter(this._elCounters.lastElementChild);
    }


}