import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false, //Se agrega esto para evitar errores
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]> | undefined;

  constructor(
    private menuCtrl: MenuController,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  mostrarMenu()
  {
    this.menuCtrl.open('first');
  }

}
