import { getJoueursParEquipe } from './EquipeService.js';


export default class Router {
    #_el;
    #_elSelect;
    #_elsOption;
    #_elJoueurs;
    #_domain;
    #_routes;


    constructor(el) {
        this.#_el = el;
        this.#_elSelect = this.#_el.querySelector('[data-js-equipes]');
        this.#_elsOption = this.#_elSelect.querySelectorAll('option');
		this.#_elJoueurs = document.querySelector('[data-js-joueurs]');

        if (location.hostname == 'localhost') {
            this.#_domain = `${location.pathname.substring(0, location.pathname.lastIndexOf('4-router'))}4-router/` ;
        } else {
            this.#_domain = location.pathname;
        }

        this.#_routes = [

        ];

        this.#init();
    }


    #init() {


        /**
         * Comportements au chargement de la page
         */


   

        /**
         * Comportements à l'événement change du select
         */
        this.#_elSelect.addEventListener('change', function(e) {
            if (this.#_elSelect.value != 0) {



            } else {

            }
        }.bind(this));



        /**
         * Comportements à l'événement popstate
         */




    }



    /**
     * Gestion du slug
     */





    /**
     * État accueil
     */





}