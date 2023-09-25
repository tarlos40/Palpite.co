<?php
    define('DB_HOST', 'mysql:host=localhost;dbname=palpiteco');
    define('DB_USER', 'tarlos');
    define('DB_PASSWORD', '@Trquato1907');

    try {
        $pdo = new PDO(DB_HOST, DB_USER, DB_PASSWORD);
        $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e) {
        echo '<div class="modal">';
            echo '<div class="card">';
                echo '<div class="container">';
                    echo '<span class="material-icons-outlined">close</span>';
                echo '</div>';
                echo '<div class="container">';
                    echo '<img src="warning.gif">';
                echo '</div>';        
                echo '<h1 class="title">ERROR: ' . $e -> getCode() . '</h1>';
            echo '</div>';
        echo '</div>';
    }
?>