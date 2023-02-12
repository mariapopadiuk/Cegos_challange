<?php
$error = false;
$error_message = '';

//get data from query parameters
$encrypted_data = $_GET['track'];

if (empty($encrypted_data)) { //Check if get data is empty
  $error_message =  "Something went wrong.<br>Tracking data is required";
  $error = true;
} else {
  //Decrypt get data
  $decrypted_data = hex2bin($encrypted_data);
  //Create an array from decrypted data
  $array_decrypted_data = explode(';', $decrypted_data);

  //check for undefined values in array
  foreach ($array_decrypted_data as $value) {
    if ($value === "undefined") {
      $error_message =  "Data malfomed";
      $error = true;
      break;
    }
  }

  //check if contain the correct amount of variables
  if (count($array_decrypted_data) !== 14) {
    $error_message =  "Some data is missed";
    $error = true;
  }
  // If all good insert in DB
  if (!$error) {
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
    }
    //Generate query
    $sql = "INSERT INTO  tracking_info 
              (InternalClient, 
              Client, 
              Module, 
              Language, 
              URL, 
              Width, 
              Height, 
              Browser,
              BrowserVersion, 
              Java, 
              Mobile, 
              OS, 
              OSVersion, 
              Cookies, 
              track)
            VALUES 
              ('$array_decrypted_data[0]', 
              '$array_decrypted_data[1]', 
              '$array_decrypted_data[2]', 
              '$array_decrypted_data[3]', 
              '$array_decrypted_data[4]', 
              '$array_decrypted_data[5]', 
              '$array_decrypted_data[6]', 
              '$array_decrypted_data[7]', 
              '$array_decrypted_data[8]', 
              $array_decrypted_data[9], 
              $array_decrypted_data[10], 
              '$array_decrypted_data[11]', 
              '$array_decrypted_data[12]', 
              $array_decrypted_data[13], 
              '$encrypted_data')";

    if ($conn->query($sql) === TRUE) {
      echo '<div class="text-green-600 text-center p-[20px]">New record created successfully</div>';
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }
  }
}
