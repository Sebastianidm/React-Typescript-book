// Tipado en funciones 

const Funciones = () => {

    const sumar = ( a: number, b:number ):number => {
        return a + b;
        

    }

  return (
   
    <>
    <h3>Funciones</h3>
    <p>
        El resultado es :  {sumar(5 , 6)}
    </p>
    </>
  )
}

export default Funciones