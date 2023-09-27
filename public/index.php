<?php
    include __DIR__ . '/./../app/config/config.php';
?>

<html lang="pt-br">

<head>
    <!-- META - CONFIG -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- TITLE -->
    <title>Palpite.co - Site de Apostas</title>

    <!-- GOOGLE FONTS - IMPORT -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <!-- NORMALIZE - IMPORT -->
    <link rel="stylesheet" href="../../../vendor/normalize/normalize.css">
    <!-- CSS - IMPORT -->
    <link rel="stylesheet" href="./assets/css/styles.min.css">
</head>

<body>
    <!-- HEADER -->
    <header class="header">
        <!-- HEADER - MENU -->
        <span class="icon material-symbols-outlined">
            menu
        </span>
        <!-- HEADER - LOGO -->
        <a href="index.php" class="logo">PALPITE.<span class="logo-divider">CO</span></a>
        <!-- HEADER - PROFILE -->
        <span class="icon material-symbols-outlined">
            account_Circle
        </span>
    </header>

    <!-- FOOTER -->
    <footer class="bottom">
        <div class="bottom-item">
            <span class="icon material-symbols-outlined">widgets</span>
            <p class="text text-white">Inicio</p>
        </div>
        <div class="bottom-item">
            <span class="icon material-symbols-outlined">sports_soccer</span>
            <p class="text text-white">Futebol</p>
        </div>
        <div class="bottom-item">
            <span class="icon material-symbols-outlined">sports_basketball</span>
            <p class="text text-white">Basquete</p>
        </div>
        <div class="bottom-item">
            <span class="icon material-symbols-outlined">casino</span>
            <p class="text text-white">Cassino</p>
        </div>
    </footer>
</body>

</html>