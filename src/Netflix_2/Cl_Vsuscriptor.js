export class Vsuscriptor{
    leerdatos(){
        let cedula = prompt("cedula")
        let plan = prompt("plan")

        return {cedula, plan}


    }
    reportar(salida, cedula, precioB, precioPsus){
        salida.innerHTML += `<br> El suscriptor: ${cedula},
        Precio base es de: $${precioB},
        paga un total de: $${precioPsus} </br>`
    }
}

