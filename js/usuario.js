async function obtenerUsuario() {
    try{
        const respuesta=await fetch("../Backend/routes/api.php?url=usuarios");
        const usuarios=await respuesta.json();
        const contenedor=document.getElementById ("contenedor-usuarios");
        contenedor.innerHTML=mostrarUsuarios(usuarios);
        console.log(usuarios);
    }catch (error){
        console.error("Error al obtener usuario" + error);
    }
    }

    function mostrarUsuarios(usuarios) {
        let contenido = " ";
        usuarios.forEach(usuario => {
            contenido += `<h4>${usuario.nombre}</h4>`;
            contenido += `<h4>${usuario.email}</h4>`;
            contenido += `<h4>${usuario.telefono}</h4>`;
        });
        return contenido; 
    }

    obtenerUsuario ();

    function crearTabla(usuarios) {
        let tabla = `
            <table border="1" class="Usuarios">
                <thead>
                    <tr>
                        <th>id_usuario</th>
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
                    <td class="celda-usuario">${usuario.nombre}</td>
                    <td class="celda-usuario">${usuario.email}</td>
                    <td class="celda-usuario">${usuario.telefono}</td>
                </tr>
            `; 
        });
    
        return tabla;
    }
    
    obtenerUsuario();