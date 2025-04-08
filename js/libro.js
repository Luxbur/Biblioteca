//await: Se utiliza dentro de una función asincrónica, cuando se reliza una petición. Este pausa la ejecución de la función hasta que el server retorna el resultado. 
//fetch: Es una api de JS que se utiliza para realizar solicitudes en red. Permite obtener recursos como Json, imágenes, etc.
//getElementById: Llame/Trae a un elemento dentro de un Div de otro lado.
//mostrarLibros: Cambia el contenido HTML de ese comonente.
//const: no se puede cambiar una vez asignado.
//let: puede ser cambiaod en el futuro.
async function obtenerLibros() {
try{
    const respuesta=await fetch("./Backend/routes/api.php");
    const libros=await respuesta.json();
    const contenedor=document.getElementById ("libro");
    contenedor.innerHTML=mostrarLibros(libros);
    console.log(libros);
}catch (error){
    console.error("error al obtener libros" + error);
}
}

function crearTabla(libros) {
    //función que genera la tabla con comandos html
    let tabla = `
    <tabla border= "1" class="tabla-libros">
    <thead>
        <tr>
        <th>id_libro</th>
        <th>Titulo</th>
        <th>Autor</th>
        <th>Año de Publicación</th>
        <th>Disponible</th>
        <th></th>
        </tr>
    </thead>
    <tbody>
`;

//codigo para añadir los datos
libros.forEach(libro => {
    tabla += `
    <tr class="fila-libro">
    <td class="celda-libro">${libro-id_libro}</td>
    <td class="celda-libro">${libro.titulo}</td>
    <td class="celda-libro">${libro.autor}</td>
    <td class="celda-libro">${libro.año_publicacion}</td>
    <td class="celda-libro">${libro.disponible === 1 ? "Disponible" : "No disponible"}</td>
    <td class="celda-libro"><a href='${libro.imagen}' target='_blank'><img style='width:10%;displey:block ' src="${libro.imagen}"></a></td>
    </tr>
    `;
})

return tabla;
}

obtenerLibros();