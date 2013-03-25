<?php
// Name and E-mail of the Recipient
$name_recipient = "Maulik Suchak";
$email_recipient = "suchak.maulik179@gmail.com";

// The name and email of the sender
$name_sender = $_POST['name'];
$email_sender = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
// The subject of the email

// the headers of the email (you can also add a CC or BCC this way)
$headers = "From: ".$name_sender." <".$email_sender.">\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";


// the message
$message = "
<br />
<br /><br />
Name:".$_POST['name']."
<br /><br />
E-mail Address:".$_POST['email']."
<br /><br />
Subject:".$_POST['subject']."
<br /><br />
Message:".$_POST['message']."
<br /><br />

";
// Ad <br> to the message
$bericht = nl2br($message);
// Send the mail
mail($email_recipient, $subject, $message, $headers);

header('location:http://www.mauliksuchak.in/');
?>
