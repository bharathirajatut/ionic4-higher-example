<?php
Class Factory
{
  private static $local_db;
    static $den=0;
/**
* Open new local database connection
*
* @return MySql
*/

public static function getConnection()
{

//$servername = "localhost";
$servername='127.0.0.1';

$username="root";
$password="raja";

$db="cart";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   // echo "Connected successfully";
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }
    return $conn;
}
}
//echo Factory::$den; jus for testing purpose only



?>