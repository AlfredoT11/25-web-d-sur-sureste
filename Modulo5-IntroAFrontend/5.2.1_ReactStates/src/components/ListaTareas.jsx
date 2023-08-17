import { useState } from "react";
import Tarea from "./Tarea";

const ListaTareas = (props) => {

    const [contador, setContador] = useState(0);

    const agregarTarea = () => {
        //alert("Agregando tarea");
        setContador(contador + 1);
    }

    return (
        <>
            <h1>Lista de tareas</h1>
            <label>Tarea nueva: </label>
            <input type="text" />
            <button onClick={agregarTarea}>Agregar tarea</button>

            <p>Contador: {contador}</p>
            <ul>
                <Tarea nombreTarea="Tarea 1" />
                <Tarea nombreTarea="Tarea 2" />
                <Tarea nombreTarea="Tarea 3" />
            </ul>
        </>
    )
}

export default ListaTareas;