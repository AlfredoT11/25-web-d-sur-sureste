import PropTypes from 'prop-types'

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

HolaMundoComponent.propTypes = {
  name: PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired
}
export default HolaMundoComponent
