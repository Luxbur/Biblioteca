<?php
require "../models/Libro.php"; // Importar el modelo

$libroModel = new Libro($pdo); // Instancia del modelo


function obtenerLibros() {
    global $libroModel; // global hace referencia al ambito global, se refiere a que los objetos son accesibles en cualquier parte del codigo incluyendo cualquier funcion o clase. Disponible en cualuier parte del scirpt php.
    echo json_encode($libroModel->obtenerTodos()); // echo significa imprimir. El formato json es un formato universal que muestra entre llaves ("") algun objeto.
}

function agregarLibro($titulo, $autor, $anio_publicacion, $disponible) {
    global $libroModel;
    if ($libroModel->agregar($titulo, $autor, $anio_publicacion, $disponible)) {
        echo json_encode(["message" => "Libro agregado"]);
    } else {
        echo json_encode(["error" => "Error al agregar el libro"]);
    }
}

function eliminarLibro($id) {
    global $libroModel;
    if ($libroModel->eliminar($id)) {
        echo json_encode(["message" => "Libro eliminado"]);
    } else {
        echo json_encode(["error" => "Error al eliminar el libro"]);
    }
}
?>