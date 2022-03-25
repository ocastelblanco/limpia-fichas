<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$salida = array(
  array(
    "idguion" => "DE_00_00_ES",
    "titulo" => "Guión DEMO #1",
    "numFichas" => "10"
  ),
  array(
    "idguion" => "DE_00_01_ES",
    "titulo" => "Guión DEMO #2",
    "numFichas" => "8"
  ),
  array(
    "idguion" => "DE_00_02_ES",
    "titulo" => "Guión DEMO #3",
    "numFichas" => "14"
  ),
  array(
    "idguion" => "DE_00_03_ES",
    "titulo" => "Guión DEMO #4",
    "numFichas" => "12"
  ),
);
print_r(json_encode($salida));
