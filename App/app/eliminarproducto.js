import  React from 'react'
import Constantes from "./Constantes";
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import Constantes from './Constantes';
import { Redirect } from 'react-router';
class FilaDeTablaDeProductos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eliminado: false,
        };
        this.redireccionarParaEditar = this.redireccionarParaEditar.bind(this);
        this.eliminar = this.eliminar.bind(this);
    }
   
    async eliminar() {
        const resultado = await Swal.fire({
            title: 'Confirmación',
            text: '¿Eliminar "${this.props.productos.nombre}"?',
            icon: 'question',
            showcancelButton: true,
            confirmButtonColor: '#3298dc',
            cancelButtonColor: '#f14668',
            cancelButtonText: 'NO',
            confirmButtonText: 'SI, eliminar'
        });
    if(!resultado.value) {
        return;
    }
    const respuesta = await fetch('${Constantes.RUTA_API}/eliminar_producto.php?id=${this.props.producto.id}'),{
        method: DELETE    };
    const exitoso = await respuesta.json();
    if (exitoso){
        toast('producto eliminado',{
            position:"top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        this.setState({
            eliminado: true,
        });
    }else { 
            toast.error("Error eliminado.Intenta nuevamente");
    }
    }


render() {
    if (this.state.eliminado) {
        return null;
    }
    return (
        <tr>
            <td>{this.props.producto.nombre}</td>
            <td>{this.props.producto.referencia}</td>
            <td>{this.props.producto.precio}</td>
            <td>{this.props.producto.peso}</td>
            <td>{this.props.producto.categoria}</td>
            <td>{this.props.producto.stockproducto}</td>
            <td>
                <Link to={`/producto/editar/${this.props.producto.id}`} className="button is-info">Editar</Link>
            </td>
            <td>
                <button onClick={this.eliminar} className="button is-danger">Eliminar</button>
            </td>
        </tr>
    );
    }
}