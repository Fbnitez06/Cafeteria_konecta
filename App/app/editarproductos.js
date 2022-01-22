import  React from 'react'
import Constantes from "./Constantes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, withRouter } from 'react-router-dom';
import producto from './VerProducto';
class EditarProducto extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            producto: {
                id: " ",
                "nombre": "",
                "referencia":"",
                "precio": "",
                "peso": "",
                "categoria": "",
                "stock": "",
                "date": "",

            },
        }
            this.manejarCambio = this.manejarCambio.bind(this);
            this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
    }
    async componentDidMount() {
        const idproducto = this.props.match.params.id;
        const respuesta = await fetch ('${Constantes. RUTA_API}/obtenerproducto.php?id=${idproducto}');
        const producto = await respuesta.json();
        this.setState({
            producto: producto,
        });
    };

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
                            <th>stock</th>
                            <th>fechaproducto</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.producto.map(producto => {
                            return <FilaDeTablaDeProducto key={producto.id} producto={producto}></FilaDeTablaDeProducto>;
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
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
            <td>{this.props.producto.stock}</td>
            <td>{this.props.producto.fechaproducto}</td>
            <td>
                <Link to={`/producto/editar/${this.props.producto.id}`} className="button is-info">Editar</Link>
            </td>
            <td>
                <button onClick={this.eliminar} className="button is-danger">Eliminar</button>
            </td>
        </tr>
    );
}

async manejarEnvioDeFormulario(evento) {

    evento.preventDefault();
    

    const cargaUtil = JSON.stringify(this.state.producto);
    // ¡Y enviarlo!
    const respuesta = await fetch(`${Constantes.RUTA_API}/actualizar_producto.php`, {
        method: "PUT",
        body: cargaUtil,
    });
    const exitoso = await respuesta.json();
    if (exitoso) {
        toast('producto guardado ', {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    } else {
        toast.error("Error guardando. Intenta nuevamente");
    }
}
manejarCambio(evento) {
    const clave = evento.target.id;
    let valor = evento.target.value;
    this.setState(state=> {
        const productoActualizado = state.producto;
        if (clave=="nombre"){
            valor = parseFloat(valor);
        }
        productoActualizado[clave] = valor;
        return {
            producto:productoActualizado,
        }
        }
    )
}
}
export default withRouter(EditarProducto);
