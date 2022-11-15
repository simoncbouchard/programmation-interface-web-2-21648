class Lorem {
    
    /**
     * Injecte le titre et la citation dans le DOM 
     * @param {HTMLElement} el 
     * @param {String} titre 
     * @param {Array} citations 
     */
    injecteCitation(el, titre, citations) {
        let index = this.#randomIndex(citations.length),
            dom = `
                    <h3>${titre}</h3>
                    <p>${this._citations[index]}</p>
            `;

        el.innerHTML = dom;
    }


    /**
     * Retourne un nombre (int) aléatoire
     * @param {Number} max 
     * @returns 
     */
    #randomIndex(max) {
        return Math.floor(Math.random() * max)
    }
} 