async function obtenerPrestamo() {
        try{
            const respuesta=await fetch("../Backend/routes/api.php?seccion=prestamos&accion=ver");
            const prestamos=await respuesta.json();
            const contenedor=document.getElementById ("contenedor-prestamos");
            contenedor.innerHTML=crearTabla(prestamos);
            console.log(prestamos);
        }catch (error){
            console.error("Error al obtener prestamos" + error);
        }
        }
    
        function crearTabla(prestamos) {
            let tabla = `
                <table border="1" class="prestamo">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>id_libro</th>
                            <th>id_usuario</th>
                            <th>fecha_prestamos</th>
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
                        <td class="celda-prestamo">${prestamo.fecha_prestamos}</td>
                        <td class="celda-prestamo">${prestamo.fecha_devolucion}</td>
                        <td class="celda-prestamo"><a href='../Backend/routes/api.php?seccion=prestamos&accion=eliminar&id=${prestamo.id_prestamo}'>Eliminar</a></td>
                    </tr>
                `;
            });
        
            tabla += `</tbody></table>`;
            return tabla;
        }
        
        obtenerPrestamo();