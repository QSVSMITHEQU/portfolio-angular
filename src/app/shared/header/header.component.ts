import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/infopagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor( public _servicio:InfoPaginaService) {}

}


