(function() {

    let elsAddCounter = document.querySelectorAll('[data-js-add-counter]'),
        elsCounter = document.querySelectorAll('[data-js-counter]');


    for (let i = 0, l = elsAddCounter.length; i < l; i++) {
        new AddCounter(elsAddCounter[i]);
    }


    for (let i = 0, l = elsCounter.length; i < l; i++) {
        new Counter(elsCounter[i])
    }

})();