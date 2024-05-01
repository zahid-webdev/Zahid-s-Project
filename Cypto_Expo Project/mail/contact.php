<?php
if(empty($_POST['fname']) || empty($_POST['lname']) || empty($_POST['contact']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$fname = strip_tags(htmlspecialchars($_POST['fname']));
$lname = strip_tags(htmlspecialchars($_POST['lname']));
$contact = strip_tags(htmlspecialchars($_POST['contact']));
$email = strip_tags(htmlspecialchars($_POST['email']));

$to = "cryptomeetingorg@gmail.com"; // Change it, if you migrate to another Email  //
$subject = "REGISTRATION FOR CRYPTO EXPO DISK";
$body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nFirst Name: $fname\n\Last Name: $lname\n\n\nEmail: $email\n\nPhone Contact Number: $contact";
$header = "From: $email";
$header .= "Reply-To: $email";	

if(!mail($to, $subject, $body, $header))
  http_response_code(500);
?>
