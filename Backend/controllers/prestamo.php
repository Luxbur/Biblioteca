<?php
require "../models/Prestamo.php"; // Importar el modelo

$prestamoModel = new Prestamo($pdo); // Instancia del modelo


function obtenerPrestamo() {
    global $prestamoModel;
    echo json_encode($prestamoModel->obtenerTodos()); // Confirmamos que los datos se devuelven en formato JSON
}

function agregarPrestamo($id_libro, $id_usuario, $fecha_prestamos, $fecha_devolucion) {
    global $prestamoModel;
    if ($prestamoModel->agregar($id_libro, $id_usuario, $fecha_prestamos, $fecha_devolucion)) {
        echo json_encode(["message" => "prestamo agregado"]);
    } else {
        echo json_encode(["error" => "Error al agregar el prestamo"]);
    }
}

function eliminarPrestamo($id) {
    global $prestamoModel;
    if ($prestamoModel->eliminar($id)) {
        echo json_encode(["message" => "prestamo eliminado"]);
    } else {
        echo json_encode(["error" => "Error al eliminar el prestamo"]);
    }
}
?>