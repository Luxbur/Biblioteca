async function obtenerUsuario() {
    try{
        const respuesta=await fetch("../Backend/routes/api.php?url=usuarios");
        const usuarios=await respuesta.json();
        console.log(usuarios);
        const contenedor=document.getElementById ("contenedor-usuarios");
        contenedor.innerHTML=crearTabla(usuarios);

    }catch (error){
        console.error("Error al obtener usuario" + error);
    }
    }

    function crearTabla(usuarios) {
        let tabla = `
            <table border="1" class="Usuarios">
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
    
        usuarios.forEach(usuario => {
            tabla += `
                <tr class="fila-usuario">
                    <td class="celda-usuario">${usuario.id_usuario}</td>
                    <td class="celda-usuario">${usuario.nombre}</td>
                    <td class="celda-usuario">${usuario.email}</td>
                    <td class="celda-usuario">${usuario.telefono}</td>
                    <td class="celda-usuario"><a href='../Backend/routes/api.php?seccion=usuarios&accion=eliminar&id=${usuario.id_usuario}'>Eliminar</a></td>
                </tr>
            `;
        });
    
        tabla += `</tbody></table>`;
        return tabla;
    }
    
    obtenerUsuario();