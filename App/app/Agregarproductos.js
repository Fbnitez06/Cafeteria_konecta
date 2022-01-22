import  React from 'react'
import Constantes from "./Constantes";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
class AgregarProducto extends React.Component{
    constructor (props) {
        super(props);
        this.state ={
            producto: {
               
                "nombre": "",
                "referencia":"",
                "precio": "",
                "peso": "",
                "categoria": "",
                "stock": "",
                "fecha": "",

            },
        };
    


this.manejarCambio = this.manejarCambio.bind(this);
this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
}
render() {
    return (
        <div className="column is-one-third">
            <h1 className="is-size-3">Agregar productos</h1>
            <ToastContainer></ToastContainer>
            <form className="field" onSubmit={this.manejarEnvioDeFormulario}>
                <div className="form-group">
                    <label className="label" htmlFor="nombre">Nombre:</label>
                    <input autoFocus required placeholder="Nombre" type="text" id="nombre" onChange={this.manejarCambio} value={this.state.producto.nombre} className="input" />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="referencia">referencia:</label>
                    <input autoFocus required placeholder="referencia" type="text" id="referencia" onChange={this.manejarCambio} value={this.state.producto.referencia} className="input" />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="precio">Precio:</label>
                    <input required placeholder="Precio" type="number" id="precio" onChange={this.manejarCambio} value={this.state.videojuego.precio} className="input" />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="peso">peso:</label>
                    <input autoFocus required placeholder="peso" type="text" id="peso" onChange={this.manejarCambio} value={this.state.producto.peso} className="input" />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="categoria">categoria:</label>
                    <input autoFocus required placeholder="categoria" type="text" id="categoria" onChange={this.manejarCambio} value={this.state.producto.categoria} className="input" />
                </div>
                <div className="form-group">
                    <label className="label" htmlFor="stockProducto">stockProducto:</label>
                    <input required placeholder="stockProducto" type="stockProducto" id="stockProducto" onChange={this.manejarCambio} value={this.state.producto.stockProducto} className="input" />
                </div>
                <div className="form-group">
                    <button className="button is-success mt-2">Guardar</button>
                    &nbsp;
                    <Link to="/productos/ver" className="button is-primary mt-2">Volver</Link>
                </div>
            </form>
        </div>
    )};

 async manejarEnvioDeFormulario(evento)
 {

    evento.preventDefault();
    

    const cargaUtil = JSON.stringify(this.state.producto);
    // ¡Y enviarlo!
    const respuesta = await fetch(`${Constantes.RUTA_API}/guardar_producto.php`, {
        method: "POST",
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
        this.setState({
            producto: {
                nombre: "",
                referencia:"",
                precio: "",
                peso: "",
                categoria: "",
                stock: "",
                fecha: "",
                
            }
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

