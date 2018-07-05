import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeseosService } from "../../app/services/lista_deseos.service";
import { AddComponent } from "../add/add.component";

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html'
})
export class PendientesPage {

  listaDeseos: any[]

  constructor(
      public navCtrl: NavController,
      private _listaDeseos: ListaDeseosService,
      private _navController: NavController
  ) {
    this.listaDeseos = _listaDeseos.listas

  }

  goAdd() {
    this._navController.push( AddComponent )
  }

}
