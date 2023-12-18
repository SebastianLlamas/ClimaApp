import React from 'react'
import Formulario from './Formulario'
import useClima from '../hooks/useClima'
import { Resultado } from './Resultado';

function AppClima() {
    const { resultado } = useClima();
  return (
    <>
        <main className='dos-columnas'>
            <Formulario/>
            { resultado?.name && <Resultado/>}
        </main>
    </>
  )
}

export default AppClima