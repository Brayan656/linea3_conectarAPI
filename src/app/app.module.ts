import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './pages/listar/listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AddComponent } from './pages/add/add.component';
import { HttpClientModule } from '@angular/common/http';
import { EditarComponent } from './pages/listar/editar/editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogoComponent } from './pages/add/dialogo/dialogo.component';
import { ActualizadoComponent } from './pages/listar/editar/actualizado/actualizado.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditarComponent,
    DialogoComponent,
    ActualizadoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,

  ],
  providers: [

  ],
  entryComponents:[
    DialogoComponent,
    EditarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
