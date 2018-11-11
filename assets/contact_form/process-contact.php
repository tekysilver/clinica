<?php
    header('Access-Control-Allow-Origin: *');  

    if (isset($_POST['action'])) { // Checking for submit form
	
	$my_email = 'info@clinicaaguirre.com'; // Change with your email address
	//$my_email = 'fcabreromoreno@gmail.com';
    
	if ($_POST['action'] == 'add') {
		$name		= trim(strip_tags(addslashes($_POST['name'])));
		$email		= trim(strip_tags(addslashes($_POST['email'])));
		$message	= trim(strip_tags(addslashes($_POST['message'])));
		$pattern	= '/^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/';
		
		if ($email != '' && $message != '') {
			if (preg_match($pattern, $email)) {
				$headers = 'From: ' . $email . "\r\n";
                $headers .= "MIME-Version: 1.0\r\n";
                $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
				if ($name == '') $subject = 'Nuevo mensaje de usuario';
				else $subject = 'Nuevo mensaje de ' . $name;
                
                $HTML = '
                    <html>
                      <head>
                        <title>' . $subject . '</title>
                      </head>
                      <body>
                        <p><strong style="width: 80px;">Nombre: </strong>' . $name . '</p>
                        <p><strong style="width: 80px;">Email: </strong>' . $email . '</p>
                        <p><strong style="width: 80px;">Mensaje: </strong>' . $message . '</p>
                      </body>
                    </html>
                ';		
				mail($my_email, $subject, $HTML, $headers);

                $HTML2 = '
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                            <td valign="top" style="padding:25px;padding-bottom:0px;">
                                <table width="600" cellpadding="0" cellspacing="0" border="0" style="font:14px Helvetica,Arial,sans-serif">
                                    <tr>
                                        <td valign="top" style="font-family:Helvetica,Arial,sans-serif;font-size:25px;font-weight:bold;color:#282828;padding-bottom:10px">Gracias por su mensaje,</td>
                                    </tr>
                                    <tr>
                                        <td valign="top">En breve nos pondremos en contacto con usted para confirmar su cita.</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top" style="padding:25px;padding-top:0px;">
                                <img src="http://clinicaaguirre.com/assets/images/web_vertical.png">
                            </td>
                        </tr>
                    </table>
                ';

                mail($email, 'Gracias por tu mensaje '.$name, $HTML2, $headers);

				
				echo 'success|<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert"><i class="ion-close"></i></button><script>gtag("event", "formualrio_enviado", {event_category: "Formulario", event_action: "Submit"});</script>Gracias! Nos pondremos en contacto con usted cuanto antes.</div>';
			} else {
				echo 'error|<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert"><i class="ion-close"></i></button>Por favor introduzca una dirección de email válida.</div>';
			}
		} else {
			echo 'error|<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert"><i class="ion-close"></i></button>Por favor rellene todos los campos.</div>';
		}
	}
} else { // Submit form false
	header('Location: index.php');	
}
?>
