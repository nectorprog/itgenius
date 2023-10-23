<?php
// Проверяем тип запроса, обрабатываем только POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Получаем параметры, посланные с javascript
    $name = $_POST['name'];
    $age = $_POST['age'];
    $number = $_POST['number'];

    // создаем переменную с содержанием письма
    $content = $name . ' ' . $age . ' ' . $number;

    // Первый параметр - кому отправляем письмо, второй - тема письма, третий - содержание
    $success = mail("p.vlad-rus@mail.ru", 'Бронирование на курс: ', $content);

    if ($success) {
        // Отдаем 200 код ответа на http запрос
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        // Отдаем ошибку с кодом 500 (internal server error).
        http_response_code(500);
        echo "Письмо не отправлено";
    }

} else {
    // Если это не POST запрос - возвращаем код 403 (действие запрещено)
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}