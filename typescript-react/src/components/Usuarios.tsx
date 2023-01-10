import { useEffect, useState, useRef} from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

const Usuarios = () => {

  const  [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const paginaRef = useRef(1)


  useEffect(() => {
    // Llamado al API
    cargarUsuarios();
  }, [])

  const cargarUsuarios = async()  => {
    const resp = await reqResApi.get<ReqResListado>('/users', {
      params: {
        page: paginaRef.current
      }
    })

    if(resp.data.data.length > 0 ){
      setUsuarios( resp.data.data );
      paginaRef.current ++;
    } else {
      console.log(paginaRef.current)
    }

    setUsuarios( resp.data.data)
  }

  const renderItem = ( usuario: Usuario ) => {
    return (
      <tr key={usuario.id.toString()}>
        <td>
          <img 
          src={usuario.avatar} 
          alt={usuario.last_name}
          style={{
            width:50,
            borderRadius: 100,

          }}
          />
        </td>
        <td>{usuario.first_name} {usuario.last_name}</td>
        <td>{usuario.email}</td>
      </tr>
    );

  }
  
  return (
    <>
      <h3>Usuarios:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
             usuarios.map( usuario => renderItem(usuario) )
          }

        </tbody>
      </table>
      <button
        className='btn btn-primary m-1'
        onClick={cargarUsuarios}>
          Siguiente
      </button>


      <button className='btn btn-danger m-1'>
        Anterior
      </button>
    </>
  );
};

export default Usuarios;
