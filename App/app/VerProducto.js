import  React from 'react'
import Constantes from "./Constantes";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import FilaDeTablaDeProductos from './FilaDeTablaDeProductos';
class verProducto extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            producto: []
        };
    }
    async componentDidMount(){
        const respuesta =await fetch('${Constantes.RUTA_API}/obtener_producto.php');
        const producto = await respuesta.json();
        this.setState({producto:producto,});
    
}
render() {
    return (
        <div>
            <div className="column">
                <h1 className="is-size-3">Ver producto</h1>
                <ToastContainer></ToastContainer>
            </div>
            <div className="table-container">
                <table className="table is-fullwidth is-bordered">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>referencia</th>
                            <th>Precio</th>
                            <th>peso</th>
                            <th>categoria</th>
                            <th>stockProducto</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.producto.map(producto => {
                            return <FilaDeTablaDeProductos key={producto.id} producto={producto}></FilaDeTablaDeProductos>;
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

}
export default producto;