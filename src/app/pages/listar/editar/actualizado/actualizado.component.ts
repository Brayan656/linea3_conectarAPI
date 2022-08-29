import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Objeto } from 'src/app/_model/objeto';
import { TiendaFalsaService } from 'src/app/_service/tienda-falsa.service';

@Component({
  selector: 'app-actualizado',
  templateUrl: './actualizado.component.html',
  styleUrls: ['./actualizado.component.css']
})
export class ActualizadoComponent implements OnInit {

  public objeto=new Objeto();

  constructor(public dialogRef: MatDialogRef<ActualizadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    this.objeto=this.data.data;

    //console.log(this.objeto.category);

    console.log(this.data);
  }

}
