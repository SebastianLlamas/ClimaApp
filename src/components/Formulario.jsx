import { useState } from 'react'; from 'react'
import useClima from '../hooks/useClima'

function Formulario() {
    const [alerta, setAlerta ] = useState();
    const {busqueda ,datosBusqueda} = useClima();

    const { ciudad, pais} = busqueda;

    const handleSubmit = (e) =>{
        e.preventDefault();

    }
  return (
    <div className='contenedor'>
        <form
            onSubmit={handleSubmit}
        >
            <div className="campo">
                <label htmlFor="ciudad">Ciudad</label>
                <input 
                    onChange={datosBusqueda}
                    type="text" 
                    name="ciudad" 
                    value={ciudad}
                    id="ciudad" />
            </div>
            <div className="campo">
                <label htmlFor="pais">Pais</label>
                <select 
                    name="pais" 
                    id="pais"
                    onChange={datosBusqueda}
                    value={pais}
                >
                    <option value="">Seleccione un pais</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Peru</option>

                </select>
            </div>
            <input 
                type="submit" 
                value="Consultar Clima" 
            />
        </form>
    </div>
  )
}

export default Formulario