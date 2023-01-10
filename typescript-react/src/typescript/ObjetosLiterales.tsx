

// Las interfaces solo sirven para poner reglas de validacion a los objetos

interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion
}

interface Direccion {
  pais: string;
  casaNo: number;
  
}

const ObjetosLiterales = () => {

  const persona: Persona = {
    nombreCompleto: 'Seba',
    edad: 25,
    direccion: {
      pais: 'Chile',
      casaNo: 1103
    }
  }

 
  
  return (
    <>
    <h3>ObjetosLiterales</h3>
    <code>
      <pre>
        {JSON.stringify(persona, null, 2)}
      </pre>
    </code>
    </>
  )
}

export default ObjetosLiterales