class Cl_Articulo {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad

    }

    subTot() {
        return this.precio * this.cantidad
    }


}

class Cl_Factura {
    constructor() {
        this.acSubTot = 0


    }

    procesarArticulo(a) {
        this.acSubTot += a.subTot()
    }

    IVA() {
        return this.acSubTot * 0.16
    }

    totFact() {
        return this.acSubTot + this.IVA()
    }




}

let articulo1 = new Cl_Articulo("mayonesa", 15, 4)
let articulo2 = new Cl_Articulo("salsa", 18, 2)
let articulo3 = new Cl_Articulo("aceitunas", 8, 3)
let articulo4 = new Cl_Articulo("pan", 20, 3)

let factura = new Cl_Factura()

factura.procesarArticulo(articulo1)
factura.procesarArticulo(articulo2)
factura.procesarArticulo(articulo3)
factura.procesarArticulo(articulo4)

salida = document.getElementById("resultado")
salida.innerHTML += "resutado"
salida.innerHTML += `<p> Nombre: ${articulo1.nombre}, Precio: ${articulo1.precio}, cantidad: ${articulo1.cantidad}, Subtotal: $${articulo1.subTot()}</p>`
salida.innerHTML += `<p> Nombre: ${articulo2.nombre}, Precio: ${articulo2.precio}, cantidad: ${articulo2.cantidad}, Subtotal: $${articulo2.subTot()}</p>`
salida.innerHTML += `<p> Nombre: ${articulo3.nombre}, Precio: ${articulo3.precio}, cantidad: ${articulo3.cantidad}, Subtotal: $${articulo3.subTot()}</p>`
salida.innerHTML += `<p> Nombre: ${articulo4.nombre}, Precio: ${articulo4.precio}, cantidad: ${articulo4.cantidad}, Subtotal: $${articulo4.subTot()}</p>`
salida.innerHTML += `<p> Subtotal de la Factura: $${factura.acSubTot}</p>`
salida.innerHTML += `<p> IVA: $${factura.IVA()}</p>`
salida.innerHTML += `<p> Total Factura: $${factura.totFact()}</p>`
