<?php
// Отримуємо значення числа з параметру запиту
$number = $_GET["number"];

// Обчислюємо квадрат числа
$square = $number * $number;

// Формуємо відповідь у форматі JSON
$response = array("square" => $square);
echo json_encode($response);
?>
