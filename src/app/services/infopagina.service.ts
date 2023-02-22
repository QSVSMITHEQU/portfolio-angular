import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-paginas.interface';


@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {
info: InfoPagina = {};
cargada = false;
equipo: any = [];
constructor( private http: HttpClient ) {
this.cargarInfo();
this.cargaEquipo()
}


private cargarInfo() {
  this.http.get('assets/data/data-pagina.json')
  .subscribe( (resp: InfoPagina) => {
  this.cargada = true;
  this.info = resp;
  });
  }
private cargaEquipo () {
  this.http.get('assets/data/data-pagina.json')
  this.http.get ('https://qt--web-angular-2023-default-rtdb.europe-west1.firebasedatabase.app/equipo.json') 
  .subscribe( (resp) => {
    this.equipo = resp;
    console.log(resp);
  });
  }
  }







