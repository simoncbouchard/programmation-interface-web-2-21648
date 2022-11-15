(function() {

    let elsSamuel = document.querySelectorAll('[data-js-component="Samuel"]'),
        elsCupcake = document.querySelectorAll('[data-js-component="Cupcake"]'),
        elsHipster = document.querySelectorAll('[data-js-component="Hipster"]');


    for (let i = 0, l = elsSamuel.length; i < l; i++) {
        new Samuel(elsSamuel[i]);
    }

    for (let i = 0, l = elsCupcake.length; i < l; i++) {
        new Cupcake(elsCupcake[i]);
    }

    for (let i = 0, l = elsHipster.length; i < l; i++) {
        new Hipster(elsHipster[i]);
    }

})();