<?php

// Get the number from the request
$number = $_POST["number"];

// Calculate the square of the number
$square = $number * $number;

// Send the square back to the client
echo $square;

?>
