<?php
//credencials
$servername = "127.0.0.1";
$username = "root";
$password = '';
$db = "cegos_db";
// Create connection
$conn = new mysqli($servername, $username, $password, $db);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
};

if (empty($conn)) {
  $msg = "Database connection error";
} else {
  $result = $conn->query("SELECT * FROM tracking_info");
  if ($result == true) {
    if ($result->num_rows > 0) {
      $row = mysqli_fetch_all($result, MYSQLI_ASSOC);
      echo json_encode($row); 
    } else {
      $msg = "No Data Found";
    }
  } else {
    $msg = mysqli_error($conn);
  }
}