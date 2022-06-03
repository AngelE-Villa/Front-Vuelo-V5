import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import {RegistroVuelosComponent} from "./componentes/register-flights/registro-vuelos.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import {MaterialModule} from "../material/material.module";
import { RegistroComponent } from './componentes/register/register.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './layout/header/header.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'registro', component:RegistroComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroVuelosComponent,
    RegistroComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
