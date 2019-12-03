<?php

// var_dump($_POST['name']);

// var_dump($_GET);
if(empty($_POST)){
    echo'no....';
    exit;
}
//Validate all data
$name='';
$email='';
$subject='';
$message='';
$recipient='p_pan2@fanshawe.ca';

if (isset($_POST['name'])){
    $name= filter_var($_POST['name'],FILTER_SANITIZE_STRING);
}
if (isset($_POST['email'])){
    $email= str_replace(array("\r","/n","%0a","%od"),'',$_POST['email']);
    $email = filter_var($email, FILTER_VALIDATE_EMAIL);
}
if (isset($_POST['subject'])){
    $subject = filter_var($_POST['subject'],FILTER_SANITIZE_STRING);
}
if(isset($_POST['message'])){
    $message= $_POST['message'];
}

$headers=array(
    'From'=>'noreply@test.ca',
    'Reply-To'=>$name.'<'.$email.'>'
);

if(mail($recipient, $subject, $message, $headers)){
    echo '<p>THank you for contacting us, '.$name.'</p>';}
    else{
        echo'<p>We are sorry but the email did not go through</p>';
    }
