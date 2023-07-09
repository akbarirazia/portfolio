<?php
// Get form data from POST request
$data = json_decode(file_get_contents("php://input"));

// Extract form fields
$name = $data->name;
$email = $data->email;
$message = $data->message;

// Compose email message
$body = "Name: " . $name . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Message: " . $message;

// Send email
$to = "your-email@example.com";
$headers = "From: " . $email;

if (mail($to,  $body, $headers)) {
  // Email sent successfully
  echo json_encode(array("message" => "Email sent successfully"));
} else {
  // Error sending email
  echo json_encode(array("message" => "Error sending email"));
}
?>