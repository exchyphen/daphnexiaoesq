<?php
    $to = 'albert@daphnexiaoesq.com';
    $subject = 'testing daphnexiaoesq php script';
    $message = 'hello world! your email is ' . $_POST["email"];
    $headers = 'From: daphnexiaoesq.com'       . "\r\n" .
                 'Reply-To: NO-REPLY' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();

    // message

    // wordwrap for lines longer than 70 characters

    // send email
    if (mail($to, $subject, $message, $headers)) {
        echo 'The email has been sent successfully';
    } else {
        echo 'Email was not sent, try again';
    }
?>