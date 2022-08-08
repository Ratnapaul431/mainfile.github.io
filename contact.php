<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */


	if(isset($_POST['submit'])){

		$name=$_POST['name'];

		$dateofbirth=$_POST['dateofbirth'];

		$email=$_POST['email'];

		$phone=$_POST['phone'];

		$chekboxpolicy=$_POST['chekboxpolicy'];

		$chekboxcreditcard=$_POST['chekboxcreditcard'];

		$chekboxagent=$_POST['chekboxagent'];

		$msg=$_POST['msg'];

		$to='ratnapaul431@gmail.com'; // Receiver Email ID, Replace with your email ID

		$subject='Form Submission';

		$message="Name :".$name."\n"."date of birth :".$dateofbirth."\n"."Phone :".$phone."\n"."LIC policy :".$chekboxpolicy."\n"."LIC Credit Card :".$chekboxcreditcard."\n"."LIC Agent :".$chekboxagent."\n"."Service Enquiry Message :"."\n\n".$msg;

		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){

			echo "<h1>Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h1>";

		}

		else{

			echo "Something went wrong!";

		}

	}

?>