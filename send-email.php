<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data (refer to sources for full implementation)
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    // ... other sanitization and validation ...

    $to = "jennievg@yahoo.com"; // Change this to your email
    $headers = "From: " . $name . " <" . $email . ">\r\n";
    // ... other headers ...

    if (mail($to, $subject, $message, $headers)) {
        // header("Location: thank_you.html"); // Redirect on success
        exit;
    } else {
        echo "Sorry, something went wrong.";
    }
}
?>
