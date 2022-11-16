import Nombre from './Nombre.js';                                     // export default
//import { Nombre } from './Nombre.js';                               // export sans default


(function() {

    let elInputNumber = document.querySelector('input[name="nb"]'),
        elBtn = document.querySelector('[data-js-submit]');

    elBtn.addEventListener('click', function(e) {
        e.preventDefault();

        let nb = elInputNumber.value;
         
        for (let i = 1; i <= nb; i++) {
            //new Nombre(i);
            //new Nombre(i).init();
            new Nombre(i).afficheDetailNb();
        }
    });

})();