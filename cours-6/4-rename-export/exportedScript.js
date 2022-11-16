const maValeur = 'Ma valeur exportée renommée à l\'export.';


function maFonction(nb) {
    
    let estPremier = true;
    
    for (let i = 2, l = nb; i < l; i++) {
        if (nb % i === 0) estPremier = false;
    }
    
    let msg = `Le chiffre ${nb} ${estPremier ? 'est' : 'n\'est pas'} premier.`;
    
    return msg;
}


export {
    maValeur as valeurStatique,
    maFonction as estPremier
}