import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {RegisterRequest} from "../models/Request/RegisterRequest";
import {UsuarioResponse} from "../models/Response/UsuarioResponse";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export  class  UserTokenService  {

  private urlEndPoint="https://aerolineavuelov.herokuapp.com/api/usuario";

  constructor(private http_client:HttpClient,private router:Router) {
    if(sessionStorage.getItem("user")==null){
      this.router.navigate(['']);
    }
  }

  getUser(email:string):Observable<UsuarioResponse>{
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("user")+"").token
    });
    return this.http_client.get<UsuarioResponse>(`${this.urlEndPoint}/${email}`,{headers:reqHeader});
  }

  getUserC(cedula:string):Observable<UsuarioResponse>{
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("user")+"").token
    });
    return this.http_client.get<UsuarioResponse>(`${this.urlEndPoint}/usuario/${cedula}`,{headers:reqHeader});
  }



}
