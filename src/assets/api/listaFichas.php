<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$prefix = "https://grecowebapis.centroeditor.es/GrecoWebApis";
if (isset($_GET["id"])) {
  $url = "$prefix/GrecoApp/GetMainJson?idVersion=1&modo=publicar&idGuion=" . $_GET["id"];
} else {
  $url = "$prefix/Echo/GetAllGuiones?idProyecto=1";
}
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_exec($ch);
curl_close($ch);
