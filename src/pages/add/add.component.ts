import { Component } from "@angular/core";
import {s} from "@angular/core/src/render3";

@Component({
    selector: 'app-add',
    templateUrl: 'add.component.html'
})
export class AddComponent {

    nombreLista: string;
    nombreItem: string;

    constructor() {

    }
}