<?php 
    require_once('fonctionsDB.php');
    
    $request_payload = file_get_contents('php://input');
    $data = json_decode($request_payload, true);

    //var_dump($request_payload);
    //var_dump($data);
    
    
    if (isset($data['prenom'], $data['nomFamille'], $data['numero'], $data['idEquipe'])) {

        $prenom = htmlspecialchars($data['prenom']);
        $nom_famille = htmlspecialchars($data['nomFamille']);
        $numero = htmlspecialchars($data['numero']);
        $id_equipe = htmlspecialchars($data['idEquipe']);

        echo ajouteJoueur($prenom, $nom_famille, $numero, $id_equipe);
    
    } else {
		echo 'Erreur query string';
	}
    
?>