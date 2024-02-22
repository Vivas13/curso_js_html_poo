import { Msuscriptor } from "./Msuscriptor.js";
export class Vsuscriptor {
constructor(app) {
this.app = app;
this.vista = document.getElementById("suscriptorForm");
this.vista.hidden = true;
this.incedula = document.getElementById("suscriptorFormIncedula");
this.inplan = document.getElementById("suscriptorFormInplan");
this.btAceptar = document.getElementById("suscriptorFormBtAceptar");
this.btAceptar.onclick = () => this.agregarsuscriptor();
}
mostrar() {
    this.vista.hidden = false;
    }
    ocultar() {
    this.vista.hidden = true;
    }
    agregarsuscriptor() {
    let suscriptor = new Msuscriptor({
    cedula: this.incedula.value,
    plan: this.inplan.value,
   
    });
    this.app.Msuscriptor.procesarsuscriptor(suscriptor);
    this.app.Vsuscriptor.reportarsuscriptor(suscriptor);
    this.ocultar();
    this.app.Vsuscriptor.mostrar();
    }
    }