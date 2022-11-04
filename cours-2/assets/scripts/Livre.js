/**
 * Prototypes Objet
 */

// Constructeur de l'objet prototype Livre
function Livre(valNbPage, valPageActuelle, valAuteurPrenom, valAuteurNom) {
    this.nombrePage = valNbPage;
    this.pageActuelle = valPageActuelle;
    this.auteurPrenom = valAuteurPrenom;
    this.auteurNom = valAuteurNom;
};


// Définir des méthodes
// Syntaxe 1 :
Livre.prototype = {
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
}

// Syntaxe 2 :
Livre.prototype.decrire = function () {
    return `Ce livre de ${this.auteurPrenom + ' ' + this.auteurNom}${this.editeur ? ' publié chez l\'éditeur ' + this.editeur : ''} a ${this.nombrePage} pages, je suis présentement rendu à la page ${this.pageActuelle}.`;
};