<?php
require "../models/Prestamo.php"; // Importar el modelo

$prestamoModel = new Prestamo($pdo); // Instancia del modelo


function obtenerPrestamo() {
    global $prestamoModel;
    echo json_encode($prestamoModel->obtenerTodos()); // Confirmamos que los datos se devuelven en formato JSON
}

function agregarPrestamo($id_prestamo, $id_libro, $id_usuario, $fecha_prestamo, $fecha_devolucion) {
    global $prestamoModel;
    if ($prestamoModel->agregar($id_prestamo, $id_libro, $id_usuario, $fecha_prestamo, $fecha_devolucion)) {
        echo json_encode(["message" => "prestamo agregado"]);
    } else {
        echo json_encode(["error" => "Error al agregar el prestamo"]);
    }
}
?>