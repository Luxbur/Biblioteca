//await: Se utiliza dentro de una función asincrónica, cuando se reliza una petición. Este pausa la ejecución de la función hasta que el server retorna el resultado. 
//fetch: Es una api de JS que se utiliza para realizar solicitudes en red. Permite obtener recursos como Json, imágenes, etc.
//getElementById: Llame/Trae a un elemento dentro de un Div de otro lado.
//mostrarLibros: Cambia el contenido HTML de ese comonente.
//const: no se puede cambiar una vez asignado.
//let: puede ser cambiaod en el futuro.
async function obtenerLibros() {
    console.log("hola");
try{
    const respuesta=await fetch("./Backend/routes/api.php");
    const libros=await respuesta.json();
    const contenedor=document.getElementById ("contenedor-libros");
    contenedor.innerHTML=mostrarLibros(libros);
}catch (error){
    console.error("error al obtener libros" + error);
}
}

function mostrarLibros(libros){
    let contenido="";
    libros.forEach(libro => {
        contenido += `<td> ${libro.titulo}</td>`;
        contenido += `<td> ${libro.autor}</td>`;
        contenido += `<td> ${libro.añoDePublicacion}<td>`;
        contenido += `<td> ${libro.disponibilidad}<td>`;
    });
    return contenido;
}

console.log("hola");
obtenerLibros();