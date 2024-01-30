class Cl_asesoria {
    constructor(codigo, tasesoria, nroHoras) {
        this.codigo = codigo
        this.tasesoria = tasesoria
        this.nroHoras = nroHoras
    }

    precioB() {
        if (this.tasesoria === "A")
            return this.nroHoras * 75
        else if (this.tasesoria === "B")
            return this.nroHoras * 55
        else if (this.tasesoria === "c")
            return this.nroHoras * 30
        else
            return this.nroHoras * 20
    }

    descuento() {
        if (this.nroHoras < 5)
            return 0
        else if (this.nroHoras < 10)
            return this.precioB() * 0.05
        else if (this.nroHoras < 15)
            return this.precioB() * 0.08
        else
            return this.precioB() * 0.1
    }

    precioN() {
        return this.precioB() - this.descuento()
    }

}

class Cl_consultora {
    constructor() {
        this.acMontoTotal = 0
        this.cntAsesoriaA = 0
        this.cntAsesoriaB = 0
        this.acMontoSinDcto = 0

    }

    procesarAsesoria(a) {
        this.acMontoTotal += a.precioN()

        if (a.tasesoria === "A")
            this.cntAsesoriaA++
        if (a.tasesoria === "B")
            this.cntAsesoriaB++

        if (a.descuento() === 0)
            this.acMontoSinDcto += a.precioN()
    }

    montoRecaudadoAsesoría() {
        return this.acMontoTotal
    }

    asesoriaMasSoltda() {
        if (this.cntAsesoriaA === this.cntAsesoriaB)
            return "Ambas por igual"
        else if (this.cntAsesoriaA > this.cntAsesoriaB)
            return "A"
        else
            return "B"
    }

    montoSinDcto() {
        return this.acMontoSinDcto
    }

}


let asesoria1 = new Cl_asesoria("111", "A", 2)
let asesoria2 = new Cl_asesoria("222", "C", 10)
let asesoria3 = new Cl_asesoria("333", "B", 6)
let asesoria4 = new Cl_asesoria("444", "B", 20)
let asesoria5 = new Cl_asesoria("555", "D", 4)

let consultora = new Cl_consultora()
consultora.procesarAsesoria(asesoria1)
consultora.procesarAsesoria(asesoria2)
consultora.procesarAsesoria(asesoria3)
consultora.procesarAsesoria(asesoria4)
consultora.procesarAsesoria(asesoria5)

let salida = document.getElementById("Resultados")
salida.innerHTML += "resultados"

salida.innerHTML += `<p> Codigo: ${asesoria1.codigo}, Asesoria: ${asesoria1.tasesoria}, nroHoras: ${asesoria1.nroHoras}, PrecioBase: $${asesoria1.precioB()}, Descuento: $${asesoria1.descuento()}, PrecioN: $${asesoria1.precioN()}</p>`
salida.innerHTML += `<p> Codigo: ${asesoria2.codigo}, Asesoria: ${asesoria2.tasesoria}, nroHoras: ${asesoria2.nroHoras}, PrecioBase: $${asesoria2.precioB()}, Descuento: $${asesoria2.descuento()}, PrecioN: $${asesoria2.precioN()}</p>`
salida.innerHTML += `<p> Codigo: ${asesoria3.codigo}, Asesoria: ${asesoria3.tasesoria}, nroHoras: ${asesoria3.nroHoras}, PrecioBase: $${asesoria3.precioB()}, Descuento: $${asesoria3.descuento()}, PrecioN: $${asesoria3.precioN()}</p>`
salida.innerHTML += `<p> Codigo: ${asesoria4.codigo}, Asesoria: ${asesoria4.tasesoria}, nroHoras: ${asesoria4.nroHoras}, PrecioBase: $${asesoria4.precioB()}, Descuento: $${asesoria4.descuento()}, PrecioN: $${asesoria4.precioN()}</p>`
salida.innerHTML += `<p> Codigo: ${asesoria5.codigo}, Asesoria: ${asesoria5.tasesoria}, nroHoras: ${asesoria5.nroHoras}, PrecioBase: $${asesoria5.precioB()}, Descuento: $${asesoria5.descuento()}, PrecioN: $${asesoria5.precioN()}</p>`

salida.innerHTML += `<br>Monto Total Recibido por las asesorias$${consultora.montoRecaudadoAsesoría()}</br>`
salida.innerHTML += `<br>Asesoria mas solicitada:${consultora.asesoriaMasSoltda()}</br>`
salida.innerHTML += `<br>Servicio sin descuento:${consultora.montoSinDcto()}</br>`

