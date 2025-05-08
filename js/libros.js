//await: Se utiliza dentro de una función asincrónica, cuando se reliza una petición. Este pausa la ejecución de la función hasta que el server retorna el resultado. 
//fetch: Es una api de JS que se utiliza para realizar solicitudes en red. Permite obtener recursos como Json, imágenes, etc.
//getElementById: Llame/Trae a un elemento dentro de un Div de otro lado.
//mostrarLibros: Cambia el contenido HTML de ese comonente.
//const: no se puede cambiar una vez asignado.
//let: puede ser cambiaod en el futuro.
async function obtenerLibros() {
    try{
        const respuesta=await fetch("../Backend/routes/api.php?seccion=libros&accion=ver");
        const libros=await respuesta.json();
        console.log(libros);
        const contenedor=document.getElementById ("contenedor-libros");
        contenedor.innerHTML=crearTabla(libros);

    }catch (error){
        console.error("Error al obtener libros" + error);
    }
    }

    function crearTabla(libros) {
        let tabla = `
            <table border="1" class="Libros">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Año de Publicación</th>
                        <th>Disponibilidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
        `;
    
        libros.forEach(libro => {
            tabla += `
                <tr class="fila-libro">
                    <td class="celda-libro">${libro.id_libros}</td>
                    <td class="celda-libro">${libro.titulo}</td>
                    <td class="celda-libro">${libro.autor}</td>
                    <td class="celda-libro">${libro.anio_publicacion}</td>
                    <td class="celda-libro">${libro.disponible == 1 ? "Disponible" : "No disponible"}</td>
                    
              
                <td class="celda-libro"><a href='../Backend/routes/api.php?seccion=libros&accion=eliminar&id=${libro.id_libros}'>Eliminar</a></td>
                </tr>
            `;
        });
    
        tabla += `</tbody></table>`;
        return tabla;
    }
    
    obtenerLibros();