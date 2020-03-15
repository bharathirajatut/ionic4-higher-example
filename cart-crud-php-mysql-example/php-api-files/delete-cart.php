<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
require("cart-dao.php");


$id=$_GET["id"];
$result=CartDao::delete_cart($id);
echo json_encode($result);
?>