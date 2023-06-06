<?PHP
    // convert_temp_p_xml.php
    // WebService Conversion de température POST et réponse XML
    // Naël Telfser
    //
    header('Content-Type: application/xml');
    $temp = intval($_POST['Temperature'], 10);
    $from = $_POST['FromUnit'];
    $to = $_POST['ToUnit'];

    if($from === 'C'){
        $tempf = $temp*9/5+32;
    } else if($from === 'F') {
        $tempf = ($temp-32)*5/9;
    }
    
    $result = "<temperature>" . $tempf . "</temperature>";
    echo $result;
?>