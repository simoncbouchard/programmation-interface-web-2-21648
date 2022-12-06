<?php
	$connexion = connexionDB();
	
	/**
	 * Connection avec la base de données
	 */
	function connexionDB() {
        define('DB_HOST', 'localhost');
        define('DB_USER', 'root');
        define('DB_PASSWORD', 'root');			// MAC
        //define('DB_PASSWORD', '');			// Windows

        $laConnexion = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);
				
		if (!$laConnexion) {
			// La connexion n'a pas fonctionné
			die('Erreur de connexion à la base de données. ' . mysqli_connect_error());
		}
		
		$db = mysqli_select_db($laConnexion, 'usagers');

		if (!$db) {
			die('La base de données n\'existe pas.');
		}
		
		mysqli_query($laConnexion, 'SET NAMES "utf8"');
		return $laConnexion;
	}


	/**
	 * Exécute la requête SQL
	 * Si le paramètre $insert est true, retourne l'id de la ressource ajoutée à la db
	 */
	function executeRequete($requete, $insert = false) {
		global $connexion;
		if ($insert) {
			mysqli_query($connexion, $requete);
			return $connexion->insert_id;
		} else {
			$resultats = mysqli_query($connexion, $requete);
			return $resultats;
		}
	}
	

	/**
	 * Retourne le nombre d'usager ayant la valeur spécifiée en paramètre
	 */
	function verifieUsager($usager) {
		global $connexion;
		$usager = mysqli_real_escape_string($connexion, $usager);

		$resultat = executeRequete("SELECT COUNT(*) AS nbUsager 
							   		FROM usagers 
							   		WHERE usager = " . $usager);

		$nbUsager =  mysqli_fetch_assoc($resultat)['nbUsager'];
		return $nbUsager;
	}
?>