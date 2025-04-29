<?php
require "../controllers/libros.php"; // Importar el controlador que maneja la lógica de negocio
require "../controllers/usuario.php"; // Importar el controlador que maneja la lógica de negocio
require "../controllers/prestamo.php"; // Importar el controlador que maneja la lógica de negocio

// Obtener el método de la solicitud HTTP (GET, POST, etc.)
$requestMethod = $_SERVER["REQUEST_METHOD"];

// Si la solicitud es de tipo GET, se llama a la función obtenerLibros()
if ($requestMethod == "GET") {
    $solicitud = $_GET["url"];
    if ($solicitud == "libros") {
        obtenerLibros();
    } else if ($solicitud == "usuarios") {
        $accion=$_GET["accion"];
        if($accion=="eliminar"){
        }
        obtenerUsuario();
    } else if ($solicitud == "prestamo") {
        obtenerPrestamo();
    } else {
        echo json_encode(["error" => "Recurso no encontrado"]);
    }
}

// Si la solicitud es de tipo POST, se procesa la entrada y se agrega un libro
elseif ($requestMethod == "POST") {
    $solicitud = $_GET["url"];

if ($solicitud == "libros") {
        // Procesar la entrada para agregar un libro
        $titulo = $_POST["titulo"];
        $autor = $_POST["autor"];
        $año_de_publicacion = $_POST["año_de_publicacion"];
        $disponible = $_POST["disponible"];
    echo "Datos: " .$titulo.$autor.$año_de_publicacion.$disponible;
    agregarLibro($titulo, $autor, $año_de_publicacion, $disponible);
    global $libroModel; 

}  elseif ($solicitud == "usuarios") {
    // Procesar la entrada para agregar un usuario
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    echo "Datos: " .$nombre.$email.$telefono;
    agregarUsuario($nombre, $email, $telefono);
    global $usuarioModel;
} elseif ($solicitud == "prestamos") {
    // Procesar la entrada para agregar un prestamo
    $id_libro = $_POST["id_libro"];
    $id_usuario = $_POST["id_usuario"];
    $fecha_prestamos = $_POST["fecha_prestamos"];
    $fecha_devolucion = $_POST["fecha_devolucion"];
    echo "Datos: " .$fecha_prestamos.$fecha_devolucion;
    agregarPrestamo($id_libro, $id_usuario, $fecha_prestamos, $fecha_devolucion);
    global $prestamoModel;
// Si se usa otro método HTTP no permitido, se devuelve un mensaje de error en formato JSON
}else {
    echo json_encode(["error" => "Metodo no permitido"]);
}
}
?>