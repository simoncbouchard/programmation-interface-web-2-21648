const maPremiereValeur = 'Ma première valeur exportée nommée.';
const maDeuxiemeValeur = 'Ma deuxième valeur exportée nommée.';


function maFonction(nb) {
    
    let estPremier = true;
    
    for (let i = 2, l = nb; i < l; i++) {
        if (nb % i === 0) estPremier = false;
    }
    
    let msg = `Le chiffre ${nb} ${estPremier ? 'est' : 'n\'est pas'} premier.`;
    
    return msg;
}


export {
    maPremiereValeur,
    maDeuxiemeValeur,
    maFonction as default
}