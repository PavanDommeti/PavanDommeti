<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "trinadhdommeti16@gmail.com.com"; // Replace with your email address
    $headers = "From: $email" . "\r\n" .
        "Reply-To: $email" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();
    $mailBody = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message";

    if (mail($to, $subject, $mailBody, $headers)) {
        echo "Message sent successfully. Thank you for reaching out!";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
