import React from 'react';
import { NavLink } from "react-router-dom";
class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                   
                    <button  className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <NavLink activeClassName="is-active" className="navbar-item" to="/producto/ver">Ver producto</NavLink>
                        <NavLink activeClassName="is-active" className="navbar-item" to="/productos/agregar">Agregar producto</NavLink>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                    <strong>Soporte y ayuda</strong>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Nav;