import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usiario } from '../_model/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string=`https://central.clarisacloud.com:8443/seguridad/rest/api/v1/login/`;

  constructor(private http:HttpClient) { }
  
  login(username:string,password:string){
    //const body = `grant_type=password&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
    return this.http.post<any>(this.url,{
      "usuario":username,

      "contrasenia":password
    },{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
}
