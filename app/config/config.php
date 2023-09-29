<?php
    define('DB_HOST', 'mysql:host=localhost;dbname=palpiteco');
    define('DB_USER', 'tarlos');
    define('DB_PASSWORD', '@Torquato1907');

    try {
        $pdo = new PDO(DB_HOST, DB_USER, DB_PASSWORD);
        $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e) {
        $errorCode = $e -> getCode();
        $errorMessage = $e -> getMessage();
        
        if(isset($errorCode)) {
            echo '<div class="modal">';
                echo '<div class="card">';
                    echo '<div class="container" style="display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 5px;">';
                        echo '<span class="card material-symbols-outlined" style="width: 100%;">database</span>';
                        echo '<p class="alt" style="margin: 10px;">Error, conexão com o banco de dados</p>';
                    echo '</div>';  
                    echo '<div class="container" style="padding: 5px;">';
                        echo '<p class="title title-white">' . '<b>' . 'ERROR: ' . '</b>' . $errorCode . '</p>';  
                        echo '<p class="text text-white">' . '<b>' . 'MENSSAGE: ' . '</b>' . $errorMessage . '</p>';  
                    echo '</div>';
                echo '</div>';
            echo '</div>';
        }
    }
?>