import { Injectable } from "@angular/core";
import  { Lista } from "../classes/listas";

@Injectable()
export class ListaDeseosService {

    listas: Lista[] = []

    constructor() {
        let lista1 = new Lista('Compras');
        let lista2 = new Lista('Juegos');
        let lista3 = new Lista('Escuela');

        this.listas.push( lista1 );
        this.listas.push( lista2 );
        this.listas.push( lista3 );
    }
}