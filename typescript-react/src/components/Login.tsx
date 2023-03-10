
import { useEffect, useReducer } from "react";

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type LoginActionPayload = {
    username: string;
    nombre: string
}

type AuthAction = 
    | { type: 'logout'}
    | {type: 'login', payload:LoginActionPayload}



// Para que sea Reducer tienen que tener 2 argumentos !!!!!
const authReducer = (state: AuthState, action: AuthAction): AuthState  => {
     switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: '',
            }
        
        case "login":
            return {
                validando:false,
                token: 'ABC123',
                nombre: action.payload.nombre,
                username: action.payload.username
            }
        default:
            return state;
     }
}




const Login = () => {

    const [{validando, token, nombre }, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
      setTimeout(() =>{
        dispatch({type: 'logout'})
      },1500)
    
      
    }, []);
    
    const login = () => {
        dispatch({ 
            type: 'login',
            payload: {
                nombre: 'Sebastian',
                username: 'Sebastianidm'

            } 
            
            })
    }

    const logout = ( ) => {
        dispatch({
            type: 'logout',
        })
    }
    if(validando){
        return (
            <>
            <h3>Login</h3>

            <div className="alert alert-info">
                Validando...
    
            </div>
            </>
        )
    }

    
  return (
    <>
        <h3>Login</h3>
        {
            (token)
            ? <div className="alert alert-success"> Autenticado como: {nombre} </div>
            :  <div className="alert alert-danger"> No autenticado</div>
        }   
  

        {
            (token)
            ? 
            (
                <button 
                className="btn btn-danger"
                onClick={logout}
                >
                    Logout
                </button>
            )
            : 
            (
                <button 
                className="btn btn-primary"
                onClick={login}
                >
                    Login

                </button>

            )
        }

        


      
    </>
  )
}

export default Login