<?php
	// Pour accéder à la base de données
	require_once('fonctionsDB.php');
	
	$tableau = array();

	// Obtenir les équipes dans la BD
	$equipes = getAllEquipes();

	// Boucler sur les équipes obtenues
	while ($equipe = mysqli_fetch_assoc($equipes)) {
	   $data[] = $equipe;
    }
   
	header('Content-type: application/json; charset=utf-8');
	echo json_encode($data);
?>