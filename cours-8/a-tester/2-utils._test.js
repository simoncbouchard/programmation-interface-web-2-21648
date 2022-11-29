import { 
    addition,
    soustraction,
    multiplication,
    division,
    afficheResultatAddition,
    copieArray,
    cloneArray
} from '../scripts/2-utils';



test('Additionne 2 nombres', function() {
    let a = undefined,
        b = null;
    let somme = addition(a, b);
    expect(somme).toBeFalsy();
    expect(somme).toBeNaN();
    a = 1,
    b = 2;
    somme = addition(a,b);
    expect(somme).toBe(3);
    expect(somme).toEqual(3);
});



let additions = [[2, 2, 4], [-2, -2, -4], [2, -2, 0]];

test.each(additions)(
    'Additionne les arguments %p et %p, retourne %p',
    function(a, b, resultat) {
        let somme = addition(a, b);
        expect(somme).toEqual(resultat);
        expect(somme).toBe(resultat);
    }
);



let soustractions = [[2, 2, 0], [-2, -2, 0], [2, -2, 4]];

test.each(soustractions)(
    'Soustrait les arguments %p et %p, retourne %p',
    function(a, b, resultat) {
        let difference = soustraction(a, b);
        expect(difference).toEqual(resultat);
        expect(difference).toBe(resultat);
    }
);



let multiplications = [[2, 2, 4], [-2, -2, 4], [2, -2, -4]];

test.each(multiplications)(
    'Multiplie les arguments %p et %p, retourne %p', 
    function(a, b, resultat) {
        let produit = multiplication(a, b);
        expect(produit).toBe(resultat);
    }
);



let divisions = [[2, 2, 1], [-2, -2, 1], [2, -2, -1]];

test.each(divisions)(
    'Divise 2 nombres', 
    function(a, b, resultat) {
        let reste = division(a, b);
        expect(reste).toBe(resultat);
    }
);



//let additions = [[2, 2, 4], [-2, -2, -4], [2, -2, 0]];

test.each(additions)(
    'Affiche le résultat des arguments %p et %p, retourne %p',
    function(a, b, resultat) {
        let string = afficheResultatAddition(a, b);
        expect(string).toBe(`Le résultat de l'addition ${a} + ${b} est : ${resultat}.`);
    }
);



test('Copie le tableau', function() {
    let monTableau = [1, 2, 3];
    expect(copieArray(monTableau)).toBe(monTableau);
    expect(copieArray(monTableau)).toEqual(monTableau);
    //expect(copieArray(monTableau)).not.toBe(monTableau);
});



test('Clone tableau', function() {
    let monTableau = [1, 2, 3];
    //expect(cloneArray(monTableau)).toBe(monTableau);
    expect(cloneArray(monTableau)).toEqual(monTableau);
    expect(cloneArray(monTableau)).not.toBe(monTableau);
});