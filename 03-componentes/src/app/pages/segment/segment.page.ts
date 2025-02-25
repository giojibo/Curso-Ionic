import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
  standalone: false,
})
export class SegmentPage implements OnInit {

  seleccion: string = '';
  superHeroes: Observable<any> | undefined;

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit()
  {
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(event: any)
  {
    this.seleccion = event.detail.value;
  }

}
