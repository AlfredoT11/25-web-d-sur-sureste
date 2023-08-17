const Tarea = ({nombreTarea, eliminarTarea}) => {
    return (
        <>
            <li>{nombreTarea} <button onClick={eliminarTarea}>Eliminar tarea</button></li>
        </>
    )
}

export default Tarea;