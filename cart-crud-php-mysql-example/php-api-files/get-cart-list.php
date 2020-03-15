<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
require("cart-dao.php");


$customer="Raja";
$result=CartDao::get_cart_list($customer);
echo json_encode($result);
?>