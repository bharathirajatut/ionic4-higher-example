<?php

require("dbconn.php");

class CartDao

{


public static function delete_cart($id)
{
$data=array();
try
{
$db = Factory::getConnection();

$statement = $db->prepare("DELETE from cart where id=:id");
$statement->execute(array(
':id'=>$id));

if ($statement->rowCount()){
    $data["status"]=1;
  } else{
    $data["status"]=0;
  }

$statement=null;
  }
  catch (PDOException $e) {
    print $e->getMessage();
  }
  
  return $data;
}


public static function update_cart($p)
{
$data=array();
try
{
$db = Factory::getConnection();

$statement = $db->prepare("UPDATE cart set 
product_name=:product_name,qty=:qty,price=:price where id=:id");
$statement->execute(array(':product_name'=>$p->product_name,
':qty'=>$p->qty,
':price'=>$p->price,
':id'=>$p->id));

if ($statement->rowCount()){
    $data["status"]=1;
  } else{
    $data["status"]=0;
  }

$statement=null;
  }
  catch (PDOException $e) {
    print $e->getMessage();
  }
  
  return $data;
}

public static function add_cart($p)
{
$data=array();
try
{
$db = Factory::getConnection();

$statement = $db->prepare("INSERT into cart(
product_name,price,qty,created_date,customer) 
values(:product_name,:price,:qty,now(),:customer)");
$statement->execute(array(':product_name'=>$p->product_name,
':qty'=>$p->qty,
':price'=>$p->price,
':customer'=>$p->customer));

if ($statement->rowCount()){
    $data["status"]=1;
  } else{
    $data["status"]=0;
  }

$statement=null;
  }
  catch (PDOException $e) {
    print $e->getMessage();
  }
  
  return $data;
}


//get cart data list

public static function get_cart_list($customer)
{
$data=array();
try
{
$db = Factory::getConnection();

$statement = $db->prepare("SELECT id,product_name,qty,price,
	created_date,customer FROM cart
	where customer=:customer order by id desc ");
$statement->execute(array(
':customer'=>$customer));
$data=$statement->fetchAll(PDO::FETCH_ASSOC);

$statement=null;
  }
  catch (PDOException $e) {
    print $e->getMessage();
  }
  
  return $data;
}

}
?>