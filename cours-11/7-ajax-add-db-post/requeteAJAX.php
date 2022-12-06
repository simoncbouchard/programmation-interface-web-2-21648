<?php 
    require_once('fonctionsDB.php');

    if (isset($_POST['usager'], $_POST['password'], $_POST['prenom'], $_POST['nom'])) {
        
        /**
         * Supprime les balises et le HTML, 
         * encode les guillemets doubles et simples, 
         * supprime ou encode éventuellement les caractères spéciaux.
         */
        $usager = htmlspecialchars($_POST['usager']);
        $password = htmlspecialchars($_POST['password']);
        $prenom = htmlspecialchars($_POST['prenom']);
        $nom = htmlspecialchars($_POST['nom']);

        echo ajouteUsager($usager, $password, $prenom, $nom);
    } else {
		echo 'Erreur query string';
	}
?>