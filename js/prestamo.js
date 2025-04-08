async function obtenerPrestamo() {
    try {
        const respuesta = await fetch("./Backend/routes/api.php?url=prestamos"); // Agregamos el parámetro 'url=prestamos'
        const prestamos = await respuesta.json();
        const contenedor = document.getElementById("prestamo");
        contenedor.innerHTML = crearTabla(prestamos); // Corregimos el nombre de la función
        console.log(prestamos);
    } catch (error) {
        console.error("Error al obtener prestamo: " + error);
    }
    }
    
    function crearTabla(prestamos) {
                let tabla = `
        <table border="1" class="tabla-prestamo">
        <thead>
            <tr>
            <th>id_prestamo</th>
            <th>id_libro</th>
            <th>id_usuario</th>
            <th>fecha_prestamo</th>
            <th>fecha_devolucion</th>
            </tr>
        </thead>
        <tbody>
    `;
    
        prestamos.forEach(prestamo => {
        tabla += `
        <tr class="fila-prestamo">
        <td class="celda-prestamo">${prestamo.id_prestamo}</td>
        <td class="celda-prestamo">${prestamo.id_libro}</td>
        <td class="celda-prestamo">${prestamo.id_usuario}</td>
        <td class="celda-prestamo">${prestamo.fecha_prestamo}</td>
        <td class="celda-prestamo">${prestamo.fecha_devolucion}</td>
        </tr>
        `;
    });
    
tabla += `
        </tbody>
    </table>
    `;
    return tabla;
    }
    
    obtenerPrestamo();