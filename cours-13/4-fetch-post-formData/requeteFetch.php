<?php 
    require_once('fonctionsDB.php');

    if (isset($_POST['usager'], $_POST['password'], $_POST['nom'], $_POST['prenom'])) {
        
        /**
         * Supprime les balises et le HTML, 
         * encode les guillemets doubles et simples, 
         * supprime ou encode éventuellement les caractères spéciaux.
         */
        $usager = htmlspecialchars($_POST['usager']);
        $password = htmlspecialchars($_POST['password']);
        $nom = htmlspecialchars($_POST['nom']);
        $prenom = htmlspecialchars($_POST['prenom']);

        echo ajouteUsager($usager, $password, $nom, $prenom);
    } else {
		echo 'Erreur query string';
	}
?>