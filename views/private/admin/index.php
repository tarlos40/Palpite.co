<?php
    session_start();

    if(isset($_GET['id'])) {
        $id = $_GET['id'];
        echo '<p>' . $id . '</p>';
    } else {
        header('Location: ')
    }
?>