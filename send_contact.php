<?php
//vars

if(isset($_POST['submit'])){
$subject = "Portfolio mail";

$to = "mangjic@gmail.com";

$from = $_POST['email'];

//data
$msg = "NAME: "  .$_POST['name']    ."<br>\n";
$msg .= "EMAIL: "  .$_POST['email']    ."<br>\n";
$msg .= "TEXT: "  .$_POST['text']    ."<br>\n";

//Headers
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: <".$from. ">" ;

$smtp = Mail::factory('smtp', array(
    'host' => 'ssl://smtp.gmail.com',
    'port' => '465',
    'auth' => true,
    'username' => 'EMAIL',
    'password' => 'PASSWORD'
));

$mail = $smtp->send($to, $headers, $msg);

echo "sent";
}

?>