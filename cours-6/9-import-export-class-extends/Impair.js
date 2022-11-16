import Nombre from './Nombre.js';


export default class Impair extends Nombre {
    constructor(nb) {
        super();
        this._nb = nb;
    }


    estPremier() {
        let estPremier = true;

        for (let i = 2, l = this._nb; i < l; i++) {
            if (this._nb % i === 0) estPremier = false;
        }

        let msg = `Le chiffre ${this._nb} ${estPremier ? 'est' : 'n\'est pas'} premier.`;
        return msg;
    }


    afficheDetailNb() {
        let msg = this.estPremier();
        msg += ` ${this.estCarre()}`;
        msg += ` ${this.carre()}`;

        console.log(msg);
    }
}