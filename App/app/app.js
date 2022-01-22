import Nav from "./Nav";
import AgregarProducto from "./AgregarProducto";
import stock from "./stock";
import EditarProducto from "./EditarProducto";
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="container is-fullhd">
        <div className="columns">
          <Switch>
            <Route path="/productos/agregar">
              <AgregarProducto></AgregarProducto>
            </Route>
            <Route path="/productos/editar/:id">
              <EditarProducto></EditarProducto>
            </Route>
            <Route path="/productos/stock">
              <stockProducto></stockProducto>
            </Route>
            <Route path="/">
              <stockProducto></stockProducto>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Nav;