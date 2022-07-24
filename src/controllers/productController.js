const path = require('path');
const fs = require('fs');

let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../dataBase/products.json'), 'utf8'))

const productController = {
    //consumimos los datos del archivo JSON haciendo uso del modulo fs y el método readFileSyn 

    detalle: function (req, res){
        let id = Number(req.params.id)
        let producto = productos.find(producto => producto.id === id)
        res.render("products/detail", {
            producto: producto,
            productos: productos})
    }, 

    editar: function (req, res){
        let id = Number(req.params.id)
        let producto = productos.find(producto => producto.id === id)
        res.render("products/edit", {producto: producto})
    }, 

    crear: function (req, res){
        res.render("products/create")
    }


}


module.exports = productController

