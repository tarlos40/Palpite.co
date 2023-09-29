<?php
    session_start();

    if(isset($_SESSION['id'])) {
        header('Location: index.php');
    } else {
        header('Location: login.php');
    }
?>

<p>teste</p>