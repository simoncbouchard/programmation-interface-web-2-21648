<?php 
    require_once('fonctionsDB.php');

    if (isset($_GET['usager'], $_GET['password'], $_GET['nom'], $_GET['prenom'])) {
        
        /**
         * Supprime les balises et le HTML, 
         * encode les guillemets doubles et simples, 
         * supprime ou encode éventuellement les caractères spéciaux.
         */
        $usager = htmlspecialchars($_GET['usager']);
        $password = htmlspecialchars($_GET['password']);
        $nom = htmlspecialchars($_GET['nom']);
        $prenom = htmlspecialchars($_GET['prenom']);

        echo ajouteUsager($usager, $password, $nom, $prenom);
    
    } else {
		echo 'Erreur query string';
	}
?>