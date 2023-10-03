<?php
    if(isset($_SESSION['id'])) {
        header('Location: ?id=' . $_SESSION['id']);
    } else {
        header('Location: /login');
    }
?>