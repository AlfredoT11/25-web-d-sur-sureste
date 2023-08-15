const HolaMundoComponent = (props) => {
  console.log('props', props)

  return (
    <>
      <h1 className=''>
        Hola {props.name} tienes {props.edad} anios
      </h1>
      <button>Emit</button>
    </>
  )
}

export default HolaMundoComponent
