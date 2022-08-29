import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import { Objeto } from 'src/app/_model/objeto';
import { TiendaFalsaService } from 'src/app/_service/tienda-falsa.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogoComponent } from './dialogo/dialogo.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  data:Objeto=new Objeto();
  form!: FormGroup;
  link!: string;

  ob=new Objeto();

  elemento = new FormGroup({
    titulo: new FormControl(),
    url: new FormControl(),
    Categoria: new FormControl(),
    precio: new FormControl(),
    mensaje: new FormControl()
  });

  //inyecciin de dependencias o librerias
  constructor(private tiendaFalsaService:TiendaFalsaService,
              public dialog:MatDialog,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }


  

  
  onSubmit() {
    //console.warn(this.elemento.value); 
    this.ob.title=this.elemento.value.titulo;
    this.ob.image=this.elemento.value.url;
    this.ob.price=this.elemento.value.precio;
    this.ob.category=this.elemento.value.Categoria;
    this.ob.description=this.elemento.value.mensaje;
    //console.log(this.ob);

    this.tiendaFalsaService.crear(this.ob).subscribe(data=>{
      //console.log(data);
      //this.data=data;
      this.openDialog(data);
    });
  }

  openDialog(objeto:Objeto): void {
    const dialogRef = this.dialog.open(DialogoComponent, {
      width: '500px',
      data: {objeto},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed '+result);

    });
  }

  onClose(){
    this.router.navigate(['/list']);
  }
}

