(function() {

    let livre1 = new Livre('Tom', 'Tucker', 200, 1);


    /**
     * Appel des propriétés et méthodes de Livre via la notation pointée
     */

    console.log(livre1.decrire());
    livre1.avancePage();
    livre1.avancePage();
    livre1.avancePage();
    livre1.avancePage();
    console.log(livre1.decrire());

})();