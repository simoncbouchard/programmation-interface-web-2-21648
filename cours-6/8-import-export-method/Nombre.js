class Nombre {
    constructor() {
        this.afficheDetailNb = this.afficheDetailNb.bind(this);     // Lie (bind) le contexte this à la méthode showNbDetails exportée
    }


    #estPair(nb) {
        let msg = `Le chiffre ${nb} est ${nb % 2 == 0 ? 'pair' : 'impair'}.`;
        return msg;
    }


    #estPremier(nb) {
        let estPremier = true;
    
        for (let i = 2, l = nb; i < l; i++) {
            if (nb % i === 0) estPremier = false;
        }
    
        let msg = `Le chiffre ${nb} ${estPremier ? 'est' : 'n\'est pas'} premier.`;
        return msg;
    }


    #carre(nb){
        let msg = `Le carré de ${nb} est ${Math.pow(nb,2)}.`;
        return msg;
    }


    afficheDetailNb(nb) {
        let msg = this.#estPair(nb);
        msg += ` ${this.#estPremier(nb)}`;
        msg += ` ${this.#carre(nb)}`;

        console.log(msg);
    }
}


export const { afficheDetailNb } = new Nombre();