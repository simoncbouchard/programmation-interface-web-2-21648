(function() {

    let css = 'color: black; font-size: 14px; font-weight: bold; padding: 15px 0;'


    /**
     * Rappel objets littéraux
     */

    console.log('%cRappel objets littéraux', css);

    
    let livre = {
        nombrePage: 300,
        pageActuelle: 1,
        auteurPrenom: 'Tom',
        auteurNom: 'Tucker',
        avancePage: function() {
            if (this.pageActuelle < this.nombrePage) {
                this.pageActuelle++;
            }
        },
        reculePage: function() {
            if (this.pageActuelle > 0) {
                this.pageActuelle--;
            }
        }
    };

    livre.decrire = function () {
        return `Ce livre de ${this.auteurPrenom + ' ' + this.auteurNom} a ${this.nombrePage} pages, je suis présentement rendu à la page ${this.pageActuelle}.`;
    }


    console.log(livre.decrire());



    /**
     * Objets prototypes
     */

    console.log('%cObjets prototypes', css);


    // Instancier un prototype
    let livre1 = new Livre(300, 1, 'Tom', 'Tucker'),
        livre2 = new Livre(400, 1, 'Tricia', 'Takanawa');


    // Prototype
    console.log(livre1);
    console.log(livre1.__proto__);


    // Accéder aux propriétés d’une instance d’objet
    console.log(livre1.nombrePage);             // Propriété de l'objet prototype livre
    console.log(livre1.pageActuelle);           // Propriété de l'objet prototype livre
    console.log(livre1.auteurPrenom);           // Propriété de l'objet prototype livre
    console.log(livre1.auteurNom);              // Propriété de l'objet prototype livre

    console.log(livre2.nombrePage);             // Propriété de l'objet prototype livre             
    console.log(livre2.pageActuelle);           // Propriété de l'objet prototype livre
    console.log(livre2.auteurPrenom);           // Propriété de l'objet prototype livre
    console.log(livre2.auteurNom);              // Propriété de l'objet prototype livre

    console.log(livre1.valueOf());              // Propriété du data type JavaScript Object
    console.log(livre2.valueOf());              // Propriété du data type JavaScript Object


    // Appeler des méthodes d’une instance d’objet
    console.log(livre1.decrire());
    livre1.avancePage();
    console.log(livre1.decrire());

    console.log(livre2.decrire());
    livre2.avancePage();
    livre2.avancePage();
    livre2.avancePage();
    livre2.avancePage();
    livre2.avancePage();
    livre2.avancePage();
    livre2.reculePage();
    console.log(livre2.decrire());


    // Ajouter une propriété
    livre1.editeur = 'Quahog 5 Press';
    console.log(livre1.editeur);
    console.log(livre1.decrire());

})();