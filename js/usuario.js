async function obtenerUsuario() {
    try{
        const respuesta=await fetch("./Backend/routes/api.php");
        const usuarios=await respuesta.json();
        const contenedor=document.getElementById ("usuario");
        contenedor.innerHTML=mostrarUsuarios(usuarios);
        console.log(usuarios);
    }catch (error){
        console.error("error al obtener usuario" + error);
    }
    }
    
    function crearTabla(usuarios) {
        //función que genera la tabla con comandos html
        let tabla = `
        <tabla border= "1" class="tabla-usuarios">
        <thead>
            <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    //codigo para añadir los datos
    usuarios.forEach(usuario => {
        tabla += `
        <tr class="fila-usuario">
        <td class="celda-usuario">${usuario-id_usuario}</td>
        <td class="celda-usuario">${usuario.nombre}</td>
        <td class="celda-usuario">${usuario.email}</td>
        <td class="celda-usuario">${usuario.telefono}</td>
        </tr>
        `;
    })
    
    return tabla;
    }
    
    obtenerUsuario();