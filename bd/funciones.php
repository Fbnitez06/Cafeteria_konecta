<?php

function eliminarProductos($id)
{
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("DELETE FROM productos WHERE id = ?");
    return $sentencia->execute([$id]);
}

function ListarProductos($producto)
{
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("UPDATE productos SET nombre del producto = ?, referencia = ?, 
    precio = ?, peso = ?, categoria = ?, stock = ?, fechadeCreacion = ' WHERE id = ?");
    return $sentencia->execute([$producto->nombre, $producto-> referencia, $producto->precio, 
    $producto->peso, , $producto->categoria, $producto->stock, $producto->fechadeCreacion, $producto->id]);
}
function obtenerProductos($producto)
{
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("UPDATE productos SET nombre del producto = ?, referencia = ?, 
    precio = ?, peso = ?, categoria = ?, stock = ?, fechadeCreacion = ' WHERE id = ?");
    return $sentencia->execute([$producto->nombre, $producto-> referencia, $producto->precio, 
    $producto->peso, , $producto->categoria, $producto->stock, $producto->fechadeCreacion, $producto->id]);
}
function EditarProductos($id)
{
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("SELECT id, nombre, referencia, precio, peso, categoria, stock, fechadeCreacion FROM productos WHERE id = ?");
    $sentencia->execute([$id]);
    return $sentencia->fetchObject();
}

function CreaciondeProductos()
{
    $bd = obtenerConexion();
    $sentencia = $bd->query("SELECT id, nombre, referencia, precio, peso, categoria, stock, fechadeCreacion FROM productos");
    return $sentencia->fetchAll();
}

function guardarproducto($producto)
{
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("INSERT INTO productos(id, nombre, referencia, precio, peso, categoria, stock, fechadeCreacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    return $sentencia->execute([$producto->nombre, $producto-> referencia, $producto->precio, 
    $producto->peso, , $producto->categoria, $producto->stock, $producto->fechadeCreacion, $producto->id]);
}

function actualizarproducto($producto)
{
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("INSERT INTO productos(id, nombre, referencia, precio, peso, categoria, stock, fechadeCreacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    return $sentencia->execute([$producto->nombre, $producto-> referencia, $producto->precio, 
    $producto->peso, , $producto->categoria, $producto->stock, $producto->fechadeCreacion, $producto->id]);
}
function obtenerVariableDelEntorno($key)
{
    if (defined("_ENV_CACHE")) {
        $vars = _ENV_CACHE;
    } else {
        $file = "env.php";
        if (!file_exists($file)) {
            throw new Exception("El archivo de las variables de entorno ($file) no existe. Favor de crearlo");
        }
        $vars = parse_ini_file($file);
        define("_ENV_CACHE", $vars);
    }
    if (isset($vars[$key])) {
        return $vars[$key];
    } else {
        throw new Exception("La clave especificada (" . $key . ") no existe en el archivo de las variables de entorno");
    }
}
function obtenerConexion()
{
    $password = obtenerVariableDelEntorno("MYSQL_PASSWORD");
    $user = obtenerVariableDelEntorno("MYSQL_USER");
    $dbName = obtenerVariableDelEntorno("MYSQL_DATABASE_NAME");
    $database = new PDO('mysql:host=localhost;dbname=' . $dbName, $user, $password);
    $database->query("set names utf8;");
    $database->setAttribute(PDO::ATTR_EMULATE_PREPARES, FALSE);
    $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $database->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    return $database;
}
?>