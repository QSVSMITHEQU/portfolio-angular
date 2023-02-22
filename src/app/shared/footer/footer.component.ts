import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/infopagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent {
  constructor( public _servicio:InfoPaginaService) {}
  }