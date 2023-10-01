<?php
    session_start();

    if(isset($_POST['email']) && isset($_POST['password'])) {
        $user = array(
            'email' => $_POST['email'],
            'password' => hash('sha256', $_POST['password']),
        );

        $query = 'SELECT * FROM users WHERE email = :email AND password = :password';
        $stmt = $pdo -> prepare($query);
        $stmt -> bindParam(':email', $user['email']);
        $stmt -> bindParam(':password', $user['password']);
        $stmt -> execute();

        $users = $stmt -> fetch(PDO::FETCH_ASSOC);

        if($users && $user['password'] === $users['password'] && $users['type'] === 'admin') {
            $_SESSION['id'] = $users['id'];
            header('Location: /views/private/admin/index.php?id=' . urldecode($_SESSION['id']));
            exit();
        } else {
            $error = 'E-mail ou Senha incorreta. Tente novamente.';
            header('Location: /views/private/admin/login.php?error=' . urlencode($error));
            exit();
        }
    }
?>
