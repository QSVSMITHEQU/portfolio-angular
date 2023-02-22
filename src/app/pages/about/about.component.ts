import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/infopagina.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor (public infoService:InfoPaginaService){}
}


