import HolaMundo from "./HolaMundo";

const NombreEdad = (nombre, edad) => `
    <div>
        <div>${HolaMundo(nombre)}</div>
        <div>La edad de ${nombre} es ${edad}</div>
    </div>
`

export default NombreEdad;