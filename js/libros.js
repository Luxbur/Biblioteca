//await: Se utiliza dentro de una función asincrónica, cuando se reliza una petición. Este pausa la ejecución de la función hasta que el server retorna el resultado. 
//fetch: Es una api de JS que se utiliza para realizar solicitudes en red. Permite obtener recursos como Json, imágenes, etc.
//getElementById: Llame/Trae a un elemento dentro de un Div de otro lado.
//mostrarLibros: Cambia el contenido HTML de ese comonente.
//const: no se puede cambiar una vez asignado.
//let: puede ser cambiaod en el futuro.
async function obtenerLibros() {
    try{
        const respuesta=await fetch("../Backend/routes/api.php?url=libros");
        const libros=await respuesta.json();
        const contenedor=document.getElementById ("contenedor-libros");
        contenedor.innerHTML=mostrarLibros(libros);
        console.log(libros);
    }catch (error){
        console.error("Error al obtener libros" + error);
    }
    }

    function mostrarLibros(libros) {
        let contenido = " ";
        libros.forEach(libro => {
            contenido += `<h4>${libro.titulo}</h4>`;
            contenido += `<h4>${libro.autor}</h4>`;
            contenido += `<h4>${libro.fecha}</h4>`;
            contenido += `<h4>${libro.disponible}</h4>`;
        });
        return contenido; 
    }

    obtenerLibros ();


    
    function crearTabla(libros) {
        let tabla = `
            <table border="1" class="Libros">
                <thead>
                    <tr>
                        <th>id_libro</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Año de Publicación</th>
                        <th>Disponibilidad</th>
                    </tr>
                </thead>
            </table>
        `;
    
    
        libros.forEach(libro => {
            tabla += `
                <tr class="fila-libro">
                    <td class="celda-libro">${libro.titulo}</td>
                    <td class="celda-libro">${libro.autor}</td>
                    <td class="celda-libro">${libro.año_publicacion}</td>
                    <td class="celda-libro">${libro.disponible === 1 ? "Disponible" : "No disponible"}</td>
                </tr>
            `; 
        });
    
        return tabla;
    }
    
    obtenerLibros();