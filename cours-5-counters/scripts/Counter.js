class Counter {
    constructor(el) {
        this._el = el;
        this._elTotal = this._el.querySelector('[data-js-number]');
        this._elOperations = this._el.querySelector('[data-js-operations]');

        this._total = parseInt(this._elTotal.textContent);

        this.init()
    }

    /**
     * Initialise les comportements
     */
    init() {
        this._elOperations.addEventListener('click', function(e) {
            let action = e.target.dataset.jsAction

            if (action == 'minus') this.incremente(-1);
            else if (action == 'plus') this.incremente(1);

        }.bind(this));
    }


    /**
     * Incrémente la valeur du compteur de + ou - nb
     * @param {Number} nb 
     */
    incremente(nb) {
        this._total = this._total + nb;
        this._elTotal.textContent = this._total;
    } 
}