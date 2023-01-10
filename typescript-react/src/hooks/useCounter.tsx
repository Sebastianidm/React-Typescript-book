import React from 'react'
import { useState } from 'react'

const useCounter = (inicial: number = 0) => {
    const [valor, setValor] = useState(inicial);

    const acumular = (numero:number) => {
        setValor( valor + numero);
        
    }
    const decrecer = ( num: number ) => {
        setValor(valor - num);
    }

    return {
        valor,
        acumular,
        decrecer
    }
}

export default useCounter