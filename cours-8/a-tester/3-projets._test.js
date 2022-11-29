import { projets } from '../scripts/3-projets.js';


describe('Valide les projets', function() {
    test('Vérifie le data du fichier projet.json', function() {
        
        expect(projets).toHaveLength(4);
        expect(projets.map(projet => projet.nom)).toEqual([
            'Projet 1',
            'Projet 2',
            'Projet 3',
            'Projet 4'
        ]);
    });



    for (const key in projets) {
        test(`Valide le format du projet ${projets[key].nom}`, function() {
            expect(projets[key]).toHaveProperty('id'),
            expect(projets[key]).toHaveProperty('nom'),
            expect(projets[key]).toHaveProperty('desc'),
            expect(projets[key]).toHaveProperty('annee'),
            //expect(projets[key]).toHaveProperty('nope'),
            expect(projets[key]).toHaveProperty('techno')
        });
    };



    test(`Vérifie la valeur retournée de l'objet du projet spécifié`, function() {
        const projet2 = {
            'id': 2,
            'nom': 'Projet 2',
            'desc': 'Je suis la description du projet 2',
            'annee': 2020,
            'techno': ['WordPress']
        };
        expect(projets[1]).toMatchObject(projet2);
    });
});