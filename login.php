<?php
    define('DB_SERVER', 'localhost');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', '');
    define('DB_NAME', 'sss_db');

    $con = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $user_id = $_GET['user_id'];
        $password = $_GET['password'];
    
        $sql = "SELECT * FROM user WHERE preferred_user_id='$user_id' AND password='$password'";
        $result = mysqli_query($con, $sql);
    
        if (mysqli_num_rows($result) == 1) {
            $row = mysqli_fetch_assoc($result);
            echo "<table border='1'>";
            echo "<tr><th>CRN</th><th>Email</th><th>Preferred User ID</th><th>Last Name</th><th>First Name</th><th>Middle Name</th><th>Suffix</th><th>DOB</th></tr>";
            echo "<tr>";
            echo "<td>" . $row['crn'] . "</td>";
            echo "<td>" . $row['email'] . "</td>";
            echo "<td>" . $row['preferred_user_id'] . "</td>";
            echo "<td>" . $row['last_name'] . "</td>";
            echo "<td>" . $row['first_name'] . "</td>";
            echo "<td>" . $row['middle_name'] . "</td>";
            echo "<td>" . $row['suffix'] . "</td>";
            echo "<td>" . $row['dob'] . "</td>";
            echo "</tr>";
            echo "</table>";
        } else {
            echo "Invalid username or password.";
        }
    } else {
        echo "Invalid request method.";
    }
?>