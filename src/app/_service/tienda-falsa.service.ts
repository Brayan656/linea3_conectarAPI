import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Objeto } from '../_model/objeto';




@Injectable({
  providedIn: 'root'
})
export class TiendaFalsaService {

  private url:string=environment.HOST+'products';
  private url2:string=`${environment.HOST}products`;

  constructor(private http:HttpClient) { }

  public listar (){
    return this.http.get<Objeto[]>(`${this.url2}`);
  }
  public listarUnProducto(id:number){
    return this.http.get<Objeto>(`${this.url2}/${id}`);
  }
  public eliminar(id:number){
    return this.http.delete<Objeto>(this.url+'/'+id);
  }
  public crear(objeto:Objeto){
    return this.http.post<Objeto>(`${this.url2}`,{
      "title": objeto.title,
      "price": objeto.price,
      "description": objeto.description,
      "image": objeto.image,
      "category": objeto.category
    });
  }
  public editar(objeto:Objeto,id:number){
    return this.http.put<Objeto>(`${this.url2}/${id}`,{
      "title": objeto.title,
      "price": objeto.price,
      "description": objeto.description,
      "image": objeto.image,
      "category": objeto.category
    });
  }
}
