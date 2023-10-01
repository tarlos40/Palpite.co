<?php
// Conexão com o banco de dados (substitua com suas informações)
$pdo = new PDO('mysql:host=localhost;dbname=palpiteco', 'tarlos', '@Torquato1907');

if (isset($_POST['register'])) {
    $name = $_POST['username'];
    $email = $_POST['email'];
    $password = hash('sha256', $_POST['password']);

    // Inserir usuário no banco de dados
    $query = "INSERT INTO users (name, email, password) VALUES (:name, :email, :password)";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $password);

    if ($stmt->execute()) {
        // Registro bem-sucedido, redirecione para a página de login
        header('Location: login.php');
        exit();
    } else {
        // Erro ao inserir no banco de dados
        echo "Erro ao registrar o usuário.";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Registro</title>
</head>
<body>
    <h1>Registro</h1>
    <form method="POST" action="">
        <label for="username">Nome de usuário:</label>
        <input type="text" id="username" name="username" required><br>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>
        
        <label for="password">Senha:</label>
        <input type="password" id="password" name="password" required><br>
        
        <input type="submit" name="register" value="Registrar">
    </form>
</body>
</html>
