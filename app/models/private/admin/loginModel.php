<?php
    session_start();

    if(isset($_POST['email']) && isset($_POST['password'])) {
        $user = array(
            $_POST['email'],
            $_POST['password']
        );

        $query = 'SELECT * FROM users WHERE email = :email AND password = :password';
        $stmt = $pdo -> prepare($query);
        $stmt -> bindParam(':email', $user[0]);
        $stmt -> bindParam(':password', $user[1]);
        $stmt -> execute();

        $users = $stmt -> fetch(PDO::FETCH_ASSOC);

        if($users && $user[1] === $users['password']) {
            $_SESSION['id'] = $users['id'];
            header('Location: /views/private/admin/index.php');
            exit();
        } else {
            $error = 'E-mail ou Senha incorreta. Tente novamente.';
            header('Location: /views/private/admin/login.php?error=' . urlencode($error));
            exit();
        }
    }
?>
