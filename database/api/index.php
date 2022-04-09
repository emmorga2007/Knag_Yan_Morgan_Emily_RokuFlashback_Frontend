<?php
  // route requests for CRUD
  require('../config/connect.php');

  $query = "SELECT * FROM movies";

  if (isset($_GET['id'])) {
    $movID = $_GET['id'];
    $query .= ' WHERE id="'.$movID.'"';
  }

  $result = array();
  $runQuery = $pdo->query($query);

  while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
    $result[] = $row;
  }

  echo json_encode($result);
