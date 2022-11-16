export default class {
//export default class Nombre {
//export class Nombre {

    #_nb;
    #_elDetail;

    constructor(nb) {
        this.#_nb = nb;
        this.#_elDetail = document.querySelector('[data-js-detail]');

        //console.log(this);
        //this.init();
    }

    
    init() {
        this.showNbDetails();
    }
    

    #estPair() {
        let msg = `Le chiffre ${this.#_nb} est ${this.#_nb % 2 == 0 ? 'pair' : 'impair'}.`;
        return msg;
    }


    #estPremier() {
        let estPremier = true;
    
        for (let i = 2, l = this.#_nb; i < l; i++) {
            if (this.#_nb % i === 0) estPremier = false;
        }
    
        let msg = `Le chiffre ${this.#_nb} ${estPremier ? 'est' : 'n\'est pas'} premier.`;
        return msg;
    }


    #carre() {
        let msg = `Le carré de ${this.#_nb} est ${Math.pow(this.#_nb, 2)}.`;
        return msg;
    }


    afficheDetailNb() {
        let msg = this.#estPair();
        msg += ` ${this.#estPremier()}`;
        msg += ` ${this.#carre()}`;

        console.log(msg);

        //this.#_elDetail.insertAdjacentHTML('beforeend', msg)
    }
}