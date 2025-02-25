import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: false,
})
export class SearchPage implements OnInit {

  albumes: any[] = [];
  busqueda: string = '';

  constructor(
    private dataServices: DataService,
  ) { }

  ngOnInit()
  {
    this.dataServices.getAlbumes().subscribe
    (
      albumes =>
      {
        this.albumes = albumes;
      }
    );
  }

  onSearchChange(event: any)
  {
    //console.log(event);
    this.busqueda = event.detail.value;
  }

}
