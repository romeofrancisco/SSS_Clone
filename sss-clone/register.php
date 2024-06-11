<?php
    define('DB_SERVER', 'localhost');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', '');
    define('DB_NAME', 'sss_db');

    $con = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $location = mysqli_real_escape_string($con, $_REQUEST['location']);

        $crn = mysqli_real_escape_string($con, $_REQUEST['crn']);
        $email = mysqli_real_escape_string($con, $_REQUEST['email']);
        $preferred_user_id = mysqli_real_escape_string($con, $_REQUEST['preferred_user_id']);
        $password = mysqli_real_escape_string($con, $_REQUEST['password']);
        $last_name = mysqli_real_escape_string($con, $_REQUEST['last_name']);
        $first_name = mysqli_real_escape_string($con, $_REQUEST['first_name']);
        $middle_name = mysqli_real_escape_string($con, $_REQUEST['middle_name']);
        $suffix = mysqli_real_escape_string($con, $_REQUEST['suffix']);
        $dob = mysqli_real_escape_string($con, $_REQUEST['dob']);
        $room_floor_unit = mysqli_real_escape_string($con, $_REQUEST['room_floor_unit']);
        $house_lot_block = mysqli_real_escape_string($con, $_REQUEST['house_lot_block']);
        $street = mysqli_real_escape_string($con, $_REQUEST['street']);
        $subdivision = mysqli_real_escape_string($con, $_REQUEST['subdivision']);
        $foreign_address = mysqli_real_escape_string($con, $_REQUEST['foreign_address']);
        $foreign_city = mysqli_real_escape_string($con, $_REQUEST['foreign_city']);
        $foreign_zip = mysqli_real_escape_string($con, $_REQUEST['foreign_zip']);
        $foreign_country = mysqli_real_escape_string($con, $_REQUEST['foreign_country']);

        $philippines = $room_floor_unit.' '. $house_lot_block.' '. $street.' '. $subdivision;
        $foreign = $foreign_address.' '. $foreign_city.' '. $foreign_zip.' '. $foreign_country;

        if ($location == 'manila')
        {
            $manila_cities = mysqli_real_escape_string($con, $_REQUEST['manila_cities']);
            $manila_barangay = mysqli_real_escape_string($con, $_REQUEST['manila_barangay']);
            $manila_postal_code = mysqli_real_escape_string($con, $_REQUEST['manila_postal_code']);

            $sql = "INSERT INTO user(crn, email, preferred_user_id, password, last_name, first_name, middle_name, suffix, dob, mailing_philippines, city, barangay, postal, mailing_foreign) 
            VALUES('$crn','$email', '$preferred_user_id', '$password', '$last_name', '$first_name', '$middle_name', '$suffix', '$dob', '$philippines', '$manila_cities', '$manila_barangay', '$manila_postal_code', '$foreign')";
        }
        else
        {
            $select_province = mysqli_real_escape_string($con, $_REQUEST['select_province']);
            $province_cities = mysqli_real_escape_string($con, $_REQUEST['province_cities']);
            $province_barangay = mysqli_real_escape_string($con, $_REQUEST['province_barangay']);
            $province_postal_code = mysqli_real_escape_string($con, $_REQUEST['province_postal_code']);

            $sql = "INSERT INTO user(crn, email, preferred_user_id, password, last_name, first_name, middle_name, suffix, dob, mailing_philippines, province, city, barangay, postal, mailing_foreign) 
            VALUES('$crn','$email', '$preferred_user_id', '$password', '$last_name', '$first_name', '$middle_name', '$suffix', '$dob', '$philippines', '$select_province','$province_cities', '$province_barangay', '$province_postal_code', '$foreign')";
        }

        if (mysqli_query($con, $sql)) {
            echo "User Added";
            header('Location: login.html');
            exit();
        } else {
            echo "ERROR: " . mysqli_error($con);
        }
    } else {
        echo "Invalid request method.";
    }

    mysqli_close($con);
?>  
    