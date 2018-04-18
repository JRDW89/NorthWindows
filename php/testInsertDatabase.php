<?php
	$host = 'localhost';
    $user = 'root';
    $pass = '';
    $db = 'northdb';
        
    $connection = mysqli_connect($host, $user, $pass, $db);
    if($connection)
        	echo 'Connected!';
 

    $sql = "
        insert into orderTable1 
        (customerName, phoneNumber, emailAddress, messageText) 
        values ('Bob Test',07928838843,'Test@Email.com','Test Text qwerty)
    ";

    $query = mysqli_query($connection, $sql);
    if($query)
        echo 'Query Successful';
?>