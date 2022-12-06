<?php
	require_once('fonctionsDB.php');

	//echo verifieUsager($_GET['usager']);
	
	if (isset($_GET['usager'])) {
        if (verifieUsager($_GET['usager']) >= 1) {
            echo 'Déjà utilisé';
		} else {
           	echo 'Disponible';
        } 
	} else {
		echo 'Erreur query string';
	}
?>