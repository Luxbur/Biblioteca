<?php
// Se importa el archivo que contiene la configuración de la base de datos, que establece la conexión
require "../config/database.php"; // Importar la conexión a la base de datos

// Definición de la clase Libro que interactuará con la tabla 'libros' en la base de datos
class Prestamo {
    private $pdo;  // Declaración de una propiedad privada para almacenar la conexión PDO

    // El constructor recibe el objeto $pdo (conexión a la base de datos) y lo asigna a la propiedad $this->pdo
    public function __construct($pdo) {
        $this->pdo = $pdo;  // Asigna la conexión PDO a la propiedad de la clase
    }

    // Método para obtener todos los libros de la base de datos
    public function obtenerTodos() {
        // Prepara la consulta SQL para seleccionar todos los registros de la tabla 'Prestamo'
        $stmt = $this->pdo->prepare("SELECT * FROM prestamos"); // Confirmamos que la tabla 'Prestamo' existe
        
        // Ejecuta la consulta
        $stmt->execute();
        
        // Devuelve todos los resultados como un array asociativo
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Método para agregar un nuevo libro a la base de datos
    public function agregar($id_prestamo, $id_libro, $id_usuario, $fecha_prestamo, $fecha_devolucion) {
        // Prepara la consulta SQL para insertar un nuevo registro en la tabla 'libros'
        $stmt = $this->pdo->prepare("INSERT INTO Prestamo (id_prestamo, id_libro, id_usuario, fecha_prestamo, fecha_devolucion) VALUES (:id_prestamo, :id_libro, :id_usuario, :fecha_prestamo, :fecha_devolucion)");
        
        // Ejecuta la consulta con los parámetros proporcionados en la llamada al método
        // Los valores del libro se pasan en un array asociativo
        return $stmt->execute(["id_prestamo" => $id_prestamo, "id_libro" => $id_libro, "id_usuario" => $id_usuario, "fecha_prestamo" => $fecha_prestamo, "fecha_devolucion" => $fecha_devolucion]);
    }
}
?>