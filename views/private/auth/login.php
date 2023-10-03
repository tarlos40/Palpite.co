<?php
    
?>

<html lang="pt-br">

<head>
    <!-- META - CONFIG -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- TITLE -->
    <title>Palpite.co - Faça Login</title>

    <!-- GOOGLE FONTS - IMPORT -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <!-- NORMALIZE - IMPORT -->
    <link rel="stylesheet" href="./../../../public/assets/vendor/normalize.css">
    <!-- CSS - IMPORT -->
    <link rel="stylesheet" href="./../../../public/assets/css/styles.min.css">
</head>

<body>
    <!-- HEADER -->
    <header class="header">
        <!-- HEADER - LOGO -->
        <a href="login.php" class="logo">PALPITE.<span class="logo-divider">CO</span></a>
    </header>

    <!-- MAIN -->
    <main class="container">
        <!-- CARD -->
        <div class="card">
            <h1 class="title title-primary">Faça Login</h1>
            <form class="form" action="./../../../app/controllers/private/admin/loginController.php" method="post">
                <input class="input" name="email" type="email" placeholder="E-mail" require>
                <input class="input" name="password" type="password" placeholder="Senha" required>
                <div class="checkbox-container">
                    <input class="checkbox" type="checkbox" id="showPassword">
                    <label class="text" for="showPassword">Mostrar Senha</label>
                </div>
                <?php
                    if (isset($_GET['error'])) {
                        $errorMessage = $_GET['error'];
                        echo '<p class="text text-danger" style="margin: 5px 0;">' . $errorMessage . '</p>';
                    }
                ?>
                <input class="button button-primary" type="submit" value="Login">
                <div class="container-row">
                    <a class="link" href="./register.php">Criar conta</a>
                    <a class="link" href="">Esqueci a senha</a>
                </div>
            </form>
        </div>
    </main>
</body>

</html>