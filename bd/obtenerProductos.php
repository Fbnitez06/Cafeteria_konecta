<?php
$dominioPermitido = "http://localhost:3000";
header("Access-Control-Allow-Origin: $dominioPermitido");
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");
include_once "cors.php";
include_once "funciones.php";
$productos = obtenerProductos();
echo json_encode($productos);




?>

