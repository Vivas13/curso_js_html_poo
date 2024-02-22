class  Cl_suscriptor{
    constructor(cedula, plan){
        this.cedula= cedula
        this.plan= plan
        
    }
    precioB(){
        if(this.plan==="A")
        return 3
        else if(this.plan==="B")
        return 5
        else
        return 10
    }
    Adicional(){
        if(this.plan==="A")
        return this.precioB()* 0.1
        else if(this.plan==="B")
        return this.precioB()* 0.1
        else
        return 0
    }

    precioPsus(){
        return this.precioB() + this.Adicional()
    }
}

class Cl_Agencia{
    constructor(){
        this.contP_3=0
        this.contP_2=0
        this.contP_1=0
        this.contP=0
    }

    procesarSuscriptor(s){
        this.contP++
        if(s.plan==="A")
        this.contP_1++
        
        if(s.plan==="B")
        this.contP_2++
        
        if(s.plan=== "C")
        this.contP_3++
    }

    planFav(){
        if(this.contP_1> this.contP_2 && this.contP_1>this.contP_3)
        return "Plan A"
        else if(this.contP_2>this.contP_1 && this.contP_2> this.contP_3)
        return "Plan B"
        else
        return "Plan C"
    }
    porcNconexion(){
        return (this.contP_3*100)/this.contP
    }
}

let suscriptor1= new Cl_suscriptor("1","A")
let suscriptor2= new Cl_suscriptor("2","B")
let suscriptor3= new Cl_suscriptor("3","C")
let suscriptor4= new Cl_suscriptor("4","B")
let suscriptor5= new Cl_suscriptor("5","A")
let suscriptor6= new Cl_suscriptor("6","A")

let agencia= new Cl_Agencia()

agencia.procesarSuscriptor(suscriptor1)
agencia.procesarSuscriptor(suscriptor2)
agencia.procesarSuscriptor(suscriptor3)
agencia.procesarSuscriptor(suscriptor4)
agencia.procesarSuscriptor(suscriptor5)
agencia.procesarSuscriptor(suscriptor6)

salida= document.getElementById("resultados")

salida.innerHTML += "resultados"
salida.innerHTML += `<br>cedula: ${suscriptor1.cedula}, Plan: ${suscriptor1.plan},conexion: $${suscriptor1.Adicional()}, Precio por suscriptor: $${suscriptor1.precioPsus()}</br>` 
salida.innerHTML += `<br>cedula: ${suscriptor2.cedula}, Plan: ${suscriptor2.plan},conexion: $${suscriptor2.Adicional()}, Precio por suscriptor: $${suscriptor2.precioPsus()}</br>`
salida.innerHTML += `<br>cedula: ${suscriptor3.cedula}, Plan: ${suscriptor3.plan},conexion: $${suscriptor3.Adicional()}, Precio por suscriptor: $${suscriptor3.precioPsus()}</br>`
salida.innerHTML += `<br>cedula: ${suscriptor4.cedula}, Plan: ${suscriptor4.plan},conexion: $${suscriptor4.Adicional()}, Precio por suscriptor: $${suscriptor4.precioPsus()}</br>`
salida.innerHTML += `<br>cedula: ${suscriptor5.cedula}, Plan: ${suscriptor5.plan},conexion: $${suscriptor5.Adicional()}, Precio por suscriptor: $${suscriptor5.precioPsus()}</br>`
salida.innerHTML += `<br>cedula: ${suscriptor6.cedula}, Plan: ${suscriptor6.plan},conexion: $${suscriptor6.Adicional()}, Precio por suscriptor: $${suscriptor6.precioPsus()}</br>`
salida.innerHTML +=`<br>Porcentaje de suscriptores sin servicio de conexion: ${agencia.porcNconexion()}%</p>`
salida.innerHTML +=`<br>Cual es el plan favorito: ${agencia.planFav()}</p>`