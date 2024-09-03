<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // You can customize the recipient email address
    $recipient_email = "priyanshukushwaha444@gmail.com";

    // Email subject
    $subject = "New Form Submission from $name";

    // Email message
    $email_message = "Name: $name\n";
    $email_message .= "Phone Number: $phone\n";
    $email_message .= "Email ID: $email\n";
    $email_message .= "Message:\n$message\n";

    // Additional headers
    $headers = "From: $email\r\n";

    // Send the email
    if (mail($recipient_email, $subject, $email_message, $headers)) {
        // Successful submission
        echo "Thank you for your submission!";
    } else {
        // Error sending email
        echo "Oops! Something went wrong. Please try again later.";
    }
} else {
    // Handle non-POST requests
    echo "Invalid request.";
}
