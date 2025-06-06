import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/interfaces';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http : HttpClient,
  ) { }

  getusuario()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts()
  {
    return this.http.get<Componente[]>('/assets/data/menu.opts.json');
  }

  getAlbumes()
  {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes()
  {
    return this.http.get<Componente[]>('/assets/data/superheroes.json')
    .pipe(
      delay( 1500)
    );
  }
}
