function crear(){

    let nombre = document.getElementById('nombreAlumnoNuevo').value;
    let boleta = document.getElementById('boletaAlumnoNuevo').value;
    let edad = document.getElementById('edadAlumnoNuevo').value;
    let semestre = document.getElementById('semestreAlumnoNuevo').value;

    crearAlumno(nombre, boleta, edad, semestre);
}

function crearAlumno(nombre, boleta, edad, semestre){

    const alumnoNuevo = {
        nombre: nombre,
        boleta: boleta,
        edad: edad,
        semestre: semestre
    };

    let postRequest = fetch(`https://crudcrud.com/api/69a10af603ab4485aafa8348b11e77f4/alumno`, 
                            {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(alumnoNuevo)
                            }
                    );

    postRequest.then((value) => {
        alert('Registro creado');
        return value.json();
    }).then((valueJson) => {
        alert(JSON.stringify(valueJson));
    }).catch((errorValue) => {
        alert(errorValue);
    });

}