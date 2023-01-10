import useCounter from '../hooks/useCounter';


const ContadorConHook = () => {
    
    const {valor, acumular, decrecer} = useCounter(100);

    
  return (
    <>
    <h3>Contador Con Hook : <small>{valor}</small></h3>
    <button 
    className='btn btn-primary' 
    onClick={ () => acumular(1)}>
        +1s
    </button>

    &nbsp;

    <button 
    className='btn btn-danger'
    onClick={() => decrecer(1)}
    >
        -1
    </button>
    </>
  )
}

export default ContadorConHook