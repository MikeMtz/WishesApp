import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Services
import { ListaDeseosService } from "./services/lista_deseos.service";

//Pipes
import  { PlaceholderPipe } from "./pipes/placeholder.pipe";

import { PendientesPage } from "../pages/pendientes/pendientes";
import { TerminadosPage } from "../pages/terminados/terminados";
import { TabsPage } from '../pages/tabs/tabs';

import { AddComponent } from "../pages/add/add.component";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {P} from "@angular/core/src/render3";

@NgModule({
  declarations: [
    MyApp,
    PendientesPage,
    TerminadosPage,
    TabsPage,
    AddComponent,
    PlaceholderPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendientesPage,
    TerminadosPage,
    TabsPage,
    AddComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaDeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
