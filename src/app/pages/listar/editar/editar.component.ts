import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Objeto } from 'src/app/_model/objeto';
import { TiendaFalsaService } from 'src/app/_service/tienda-falsa.service';
import { ActualizadoComponent } from './actualizado/actualizado.component';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {


  public objeto=new Objeto();
  ob=new Objeto();
  
  elemento = new FormGroup({
    titulo: new FormControl(),
    url: new FormControl(),
    Categoria: new FormControl(),
    precio: new FormControl(),
    mensaje: new FormControl()
  });

  constructor(private tiendaFalsaService:TiendaFalsaService,
    public dialogRef: MatDialogRef<EditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,public dialog:MatDialog) { }

  ngOnInit(): void {
    console.log(this.data);
    let id:number=this.data.id;

    this.tiendaFalsaService.listarUnProducto(id).subscribe(element=>{
      //console.log(element);
      this.objeto.id=element.id;
      this.objeto.title=element.title;
      this.objeto.description=element.description;
      this.objeto.category=element.category;
      this.objeto.price=element.price;
      this.objeto.image=element.image;
    });
    
  }

  onSubmit() {
    //console.warn(this.elemento.value); 
    this.ob.title=this.elemento.value.titulo;
    this.ob.image=this.elemento.value.url;
    this.ob.price=this.elemento.value.precio;
    this.ob.category=this.elemento.value.Categoria;
    this.ob.description=this.elemento.value.mensaje;
    //console.log(this.ob);

    this.tiendaFalsaService.editar(this.ob,this.ob.id).subscribe(data=>{
      //console.log(data);
      //this.data=data;
      //this.openDialog(data);
      const dialogRef = this.dialog.open(ActualizadoComponent, {
        width: '500px',
        data: {data},
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed '+result);
  
      });
    });
  }
  

}
