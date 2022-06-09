import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from "../../common/GlobalConstants";
import {RegisterRequest} from "../../models/RegisterRequest";
import {MatDialog} from "@angular/material/dialog";
import {UsuarioService} from "../../services/Usuario.service";
import {UsuarioResponse} from "../../models/Response/UsuarioResponse";
import Swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public objeto:UsuarioResponse=new UsuarioResponse();
  error=false;

  public classReference = GlobalConstants;
  constructor(public dialog: MatDialog,
              private service:UsuarioService,
              private router:Router
    ,private activatedRoute: ActivatedRoute){
    this.classReference.apiURL="no_employe";
  }

  ngOnInit(): void {
  }

  login():void{
    if(this.objeto.email!=null && this.objeto.clave!=null){
      this.service.login(this.objeto).subscribe(data => {
          //almacenar token_______________________________________
          sessionStorage.setItem('user', JSON.stringify(data));
          this.router.navigate(['/reservas',data.email]);
        },err=> {
          this.error=true;
          this.objeto.email="";
          this.objeto.clave=""
        }
      );
    }
  }

}
