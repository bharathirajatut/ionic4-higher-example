<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
require("cart-dao.php");


$p=new stdClass();
$p->product_name=$_GET["product_name"];
$p->price=$_GET["price"];
$p->qty=$_GET["qty"];
$p->customer="Raja";
$p->id=$_GET["id"];
$result=CartDao::update_cart($p);
echo json_encode($result);
?>