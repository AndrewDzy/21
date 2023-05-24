function calculateSquare() {
    var numberInput = document.getElementById("numberInput");
    var number = numberInput.value;

    // Створюємо новий об'єкт XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Встановлюємо обробник події для отримання відповіді від сервера
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                var resultDiv = document.getElementById("result");
                resultDiv.innerHTML = "Квадрат числа: " + response.square;
            } else {
                console.log("Помилка: " + xhr.status);
            }
        }
    };

    // Відправляємо GET-запит до сервера для отримання даних про число
    xhr.open("GET", "server.php?number=" + number, true);
    xhr.send();
}
