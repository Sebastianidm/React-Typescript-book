

const TiposBasicos = () => {

    const nombre: string  = 'Sebastian';

    const edad: number  = 35 ;
    
    const estaActivo: boolean = true;

    const poderes: string[] = ['Volar', 'Velocidad', 'Respirar bajo el agua']


  return (
    <>
    <h3>Tipos Basicos</h3>
    { nombre} - {edad } , { (estaActivo) ? 'activo' : 'no activo'}
    <br />
    {poderes.join(', ')}
    </>
  )
} 

export default TiposBasicos