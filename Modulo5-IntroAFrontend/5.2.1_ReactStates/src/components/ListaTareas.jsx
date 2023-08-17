import { useState } from "react";
import Tarea from "./Tarea";

const ListaTareas = (props) => {

    const [contador, setContador] = useState(0);
    const [nuevaTarea, setNuevaTarea] = useState("");
    const [tareas, setTareas] = useState([]);

    const agregarTarea = () => {
        setContador(contador + 1);
        setTareas([...tareas, nuevaTarea]);
        setNuevaTarea("");
    }

    const eliminarTarea = (indexTareaABorrar) => {
        setTareas(tareas.filter((tareaTexto, i) => i !== indexTareaABorrar));
    }

    return (
        <>
            <h1>Lista de tareas</h1>
            <label>Tarea nueva: </label>
            <input
                type="text"
                value={nuevaTarea}
                onChange={(event) => { setNuevaTarea(event.target.value) }}
            />
            <button onClick={agregarTarea}>Agregar tarea</button>

            <p>Contador: {contador}</p>
            <ul>
                {
                    tareas.map((tareaTexto, index) => {
                        return (
                            <Tarea
                                key={index}
                                nombreTarea={tareaTexto}
                                eliminarTarea={() => eliminarTarea(index)}
                            />
                        )
                    })
                }
            </ul>
        </>
    )
}

export default ListaTareas;