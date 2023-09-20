<?php
    define('DB_HOST', 'mysql:hostname=127.0.0.1;dbname=palpiteco');
    define('DB_USER', 'tarlos');
    define('DB_PASSWORD', '@Torquato1907');

    try {
        $pdo = new PDO(DB_HOST, DB_USER, DB_PASSWORD);
        $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    } catch(PDOException $error) {
        echo 'ERROR -> ' . $error -> getCode() . 'MENSAGEM -> ' . $error -> getMessage(); 
    }
?>