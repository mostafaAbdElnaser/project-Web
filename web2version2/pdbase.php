<?php
$server="localhost";
$user="root";
$password='';
$database="letters";

$con=new mysqli($server,$user,$password);


$q="create database if not exists $database";

$done=$con->query($q);
$select=mysqli_select_db($con,$database);
$qq="create table if not exists tableleters(
target varchar(50),
type varchar (50),
time varchar(150)
);";

$td=$con->query($qq);

// $qqq="delete from tableleters";
// $dd=$con->query($qqq);

?>










