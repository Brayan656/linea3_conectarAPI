import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Objeto } from 'src/app/_model/objeto';
import { TiendaFalsaService } from 'src/app/_service/tienda-falsa.service';
import { EditarComponent } from './editar/editar.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title','image','category','price', 'description','Editar'];//,'Eliminar'];
  dataSource = new MatTableDataSource<Objeto>();

  @Input()
  variableX:number | undefined;


  constructor(private tiendaFalsaService:TiendaFalsaService,
              public dialog:MatDialog) { }

  ngOnInit(): void {
    
    this.tiendaFalsaService.listar().subscribe(data=>{
      //console.log(data);
      /*data.forEach(element=>{
        console.log(
        `id: ${element.id}\n
        titulo: ${element.title}
        descripcion: ${element.description}\n
        imagen: ${element.image}\n
        precio: ${element.price}`);
      });*/
      this.dataSource=new MatTableDataSource(data);
    })
    
  }
  public actualizarButton(id:number){
    const dialogRef = this.dialog.open(EditarComponent, {
      width: '500px',
      data: {id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed '+result);

    });
  }

  public eliminarButton(id:string){
    let num: number=+id;
    this.tiendaFalsaService.eliminar(num).subscribe(data=>{
      console.log("dato eliminado")
    })
  }
  
}
