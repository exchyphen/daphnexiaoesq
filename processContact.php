<?php
	// import
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;

	// instance
	$mail = new PHPMailer(true);
	
	// email Information
	$to = 'exc.dumpy@gmail.com';
	$from = $_POST["email"];
	$subject = 'Inquiry from daphnexiaoesq.com';
	//$message = $_POST["message"];

    try {
		// Server settings
		$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
		$mail->isSMTP();                                            //Send using SMTP
		$mail->Host       = 'mail.daphnexiaoesq.com';                     //Set the SMTP server to send through
		$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
		$mail->Username   = 'albert@daphnexiaoesq.com';                     //SMTP username
		$mail->Password   = 'MU.D-&T&b#A#';                               //SMTP password
		$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
		$mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

		//Recipients
		$mail->setFrom('albert@daphnexiaoesq.com', 'Mailer');
		$mail->addAddress($to, 'Albert');     //Add a recipient
		$mail->addReplyTo($from, 'Sender'); // --- experimental

		//Attachments
		//$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
		//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

		//Content
		$mail->isHTML(true);                                  //Set email format to HTML
		$mail->Subject = $subject;
		$mail->Body    = 'testing body';
		$mail->AltBody = 'testing alt body';

		$mail->send();
		echo 'Message has been sent';
	} catch (Exception $e) {
		echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
	}
?>

