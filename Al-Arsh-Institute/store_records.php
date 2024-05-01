<?php
// Database connection parameters
$dbname = "u150267957_ai";
$servername = "localhost";
$username = "u150267957_root";
$password = "Alarsh@1234";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     // Send data to Gmail
//     $to = "zahid78607@gmail.com";
//     $subject = "Form Submission";

// Retrieve form data
$full_name = $_POST['full_name'];
$f_name = $_POST['f_name'];
$dob = $_POST['dob'];
$gender = $_POST['gender'];
$contact_number = $_POST['contact_number'];
$whatsapp = $_POST['whatsapp'];
$email = $_POST['email'];
$countrySelect = $_POST['country'];
$address = $_POST['address'];
$academic_background = $_POST['academic_background'];
$course_preference = $_POST['course_preference'];
$language = $_POST['language'];



// // Construct the email message
// $message = "Full Name: $full_name\n";
// $message .= "Date of Birth: $dob\n";
// $message .= "Gender: $gender\n";
// $message .= "Contact Number: $contact_number\n";
// $message .= "Email: $email\n";
// $message .= "Address: $address\n";
// $message .= "Language Proficiency: $language_proficiency\n";
// $message .= "Academic Background: $academic_background\n";
// $message .= "Course Preference: $course_preference\n";

// $headers = "From: $email\r\n";
// $headers .= "Reply-To: $email\r\n";

// mail($to, $subject, $message, $headers);


// Insert data into the database
$sql = "INSERT INTO registration (full_name, f_name, dob, gender, contact_number, whatsapp, email, country, address, academic_background, course_preference , language)
        VALUES ('$full_name', '$f_name', '$dob', '$gender', '$contact_number', '$whatsapp', '$email', '$countrySelect', '$address', '$academic_background', '$course_preference','$language')";

if ($conn->query($sql) === TRUE) {
    echo '<h3 class="display-4 text-white text-uppercase text-center">Record added successfully</h3> <h2 class="text-primary text-uppercase mb-4 mt-5 text-center" style="letter-spacing: 5px;">Thank you!</h2>';
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
}
// Close the connection
$conn->close();
?>
