import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Componente } from './interfaces/interfaces';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  componentes: Observable<Componente[]> | undefined;
  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit()
  {
    this.componentes = this.dataService.getMenuOpts();
  }
}
