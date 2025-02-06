import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
  standalone: false,
})
export class InfinitePage implements OnInit {

  data: any[] = Array(20);
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll | undefined;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Verificar si infiniteScroll está definido después de la inicialización
    if (this.infiniteScroll) {
      this.infiniteScroll.disabled = false;
    }
  }

  loadData(event: any) {
    setTimeout(() => {
      if (this.data.length > 50) {
        event.target.complete();
        this.infiniteScroll!.disabled = true;
        return;
      }

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      event.target.complete();
    }, 1500);
  }
}
