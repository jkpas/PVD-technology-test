
<!-- if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['tel'])&&$_POST['tel']!="")&&(isset($_POST['email'])&&$_POST['email']!="")&&(isset($_POST['text'])&&$_POST['text']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'jkpas30@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p style="font-size: 16px; color: #000;">Имя: '.$_POST['name'].'</p>
                        <p style="font-size: 16px; color: #000;">Телефон: '.$_POST['tel'].'</p>
                        <p style="font-size: 16px; color: #000;">Текст: '.$_POST['email'].'</p>
                        <p style="font-size: 16px; color: #000;">Текст: '.$_POST['text'].'</p>                      
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <admin@jkpas.xyz>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
        echo 'Спасибо! Ваше письмо отправлено.'; 
} -->


<?php

$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];

$to = "jkpas30@gmail.com";
$subject = "От посетителя сайта";
$text =  "Написал(а): $name\n
          Телефон: $tel\n   
          Контактный email - $email\n";

$headers = "Content-type: text/html; charset=utf-8\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$sending = mail($to, $subject, $text, $headers);

if($sending) echo "Письмо отправлено.";
?>

