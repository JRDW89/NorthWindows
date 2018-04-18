<?php

    $today = getdate();
    $host = 'localhost';
    $user = 'root';
    $pass = 'password';
    $db = 'northdb';

        $connection = mysqli_connect($host, $user, $pass, $db);
        if($connection)
        {
            echo 'Connected';
        }
        else
        {
            echo 'Connection Failed';
        }	



    $formData = json_decode(file_get_contents("php://input"));
    $data = array();
    $error = array();

        if(empty($formData->customerName))
        {
            $error["customerName"] = "Name is required"
        }

        if(empty($formData->customerNumber))
        {
            $error["customerNumber"] = "Number is Required"
        }

        if(empty($formData->customerEmailAddress))
        {
            $error["customerNumberEmailAddress"] = "Email Address is Required"
        }
        if(empty($formData->customerMessage))
        {
            $error["customerMessage"] = "Message Required"
        }

            if(!empty($error))
            {
                $data["error"] = $error;
            }
            else
            {
                $customerName = mysql_real_escape_string($connection, $form_Data->customerName);
                $customerNumber = mysql_real_escape_string($connection, $form_Data->customerNumber);        
                $customerEmailAddress = mysql_real_escape_string($connection, $form_Data->customerEmailAddress);
                $customerMessage = mysql_real_escape_string($connection, $form_Data->customerMessage);
                
                $query = "
                            INSERT INTO ordertable1 (customerName, phoneNumber, emailAddress, messageText)
                            VALUES ($customerName, $customerNumber, $customerEmailAddress, $customerMessage)
                         ";

                    if(mysqli_query($connection, $query))
                    {
                        $data["message"] = "Data Inserted..."
                    }                
            }

    echo json_encode($data);
?>


