<?php
    session_start();

    include __DIR__ . '/../config.php';

if (isset($_POST["email"]) && isset($_POST["password"])) {
    $user = array(
        $_POST['email'],
        $_POST['password'],
    );

    if(empty($user[0]) || empty($user[1])) {
        $error = "Campos E-mail e Senha são obrigatórios";
    } else {
        try {
            $query = "SELECT * FROM users WHERE email = :email AND password = :password";
            $stmt = $pdo -> prepare($query);
            $stmt -> bindParam(':email', $user[0]);
            $stmt -> bindParam(':password', $user[1]);
            $stmt -> execute();

            $userArray = $stmt -> fetch(PDO::FETCH_ASSOC);

            if ($userArray && $user[1] === $userArray['password']) {
                $_SESSION['id'] = $userArray['id'];
                header('Location: ?sucesso=sucessado');
            } else {
                $error = "Credenciais inválidas. Tente novamente.";
            }
        } catch (PDOException $error) {
            die("Erro de conexão com o banco de dados: " . $error -> getMessage());
        }
    }
}
?>

<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Palpite.co - Site de Apostas</title>
</head>
<body>
    <form action="<?php echo $_SERVER["PHP_SELF"]; ?>" method="post">
        <input name="email" type="email" placeholder="E-mail">
        <input name="password" type="password" placeholder="Senha">
        <input type="submit" value="Login">
        <?php
    if (isset($erro)) {
        echo '<p>' . $erro . '</p>';
    }
    ?>
    </form>
</body>
</html>
