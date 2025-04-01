<?php
require "../models/Usuarios.php"; // Importar el modelo

$usuarioModel = new Usuario($pdo); // Instancia del modelo


function obtenerUsuario() {
    global $usuarioModel; // global hace referencia al ambito global, se refiere a que los objetos son accesibles en cualquier parte del codigo incluyendo cualquier funcion o clase. Disponible en cualuier parte del scirpt php.
    echo json_encode($usuarioModel->obtenerTodos()); // echo significa imprimir. El formato json es un formato universal que muestra entre llaves ("") algun objeto.
}

function agregarUsuario($nombre, $email, $telefono) {
    global $usuarioModel;
    if ($usuarioModel->agregar($nombre, $email, $telefono)) {
        echo json_encode(["message" => "usuario agregado"]);
    } else {
        echo json_encode(["error" => "Error al agregar el usuario"]);
    }
}
?>