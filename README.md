# SSS-Register-and-Login-Form-Clone
This project is a clone of the Social Security System (SSS) registration and login form with address validation through the PSGC (Philippine Standard Geographic Code) API. The backend is built using PHP, with a MySQL database managed through XAMPP.

**Features**

User Registration: Users can create an account by providing necessary information.
User Login: Users can log in using their registered credentials.
Address Validation: The integration with the PSGC API ensures that addresses are accurate and standardized.
Database Interaction: PHP scripts handle interactions with a MySQL database hosted on XAMPP.

**Technologies Used**

Frontend: HTML, CSS, JavaScript<br>
Backend: PHP<br>
Database: MySQL (via XAMPP)<br>
API Integration: PSGC API for address validation(https://psgc.cloud/docs/psgc-provinces-api-documentation/)

**Installation**
Follow these steps to set up the project on your local machine:

1.) Clone the Repository<br>
  git clone https://github.com/romeofrancisco/SSS_Clone.git

2.) Setup XAMPP<br>
  Download and install XAMPP from Apache Friends.
  Start the Apache and MySQL services from the XAMPP control panel.

3.)Database Configuration<br>
  Open phpMyAdmin (typically accessible at http://localhost/phpmyadmin).<br>
  Create a new database name sss_db.<br>
  Import the provided SQL file (database/sss_clone.sql) into your new database.

4.) Run the Application<br>
  Place the project folder in the htdocs directory of your XAMPP installation.<br>
  Open your web browser and navigate to http://localhost/sss-register-login-clone.

**Usage**<br>
Registration: Navigate to the registration page, fill out the form, and submit to create a new account.<br>
Login: Navigate to the login page, enter your credentials, and log in.<br>
Address Validation: During registration, the address fields will validate and auto-complete using data from the PSGC API.
