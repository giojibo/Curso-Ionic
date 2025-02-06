import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: false,
})
export class ListPage implements OnInit {
  usuarios: Observable<any> | undefined;
  @ViewChild(IonList) ionList: IonList | undefined;

  constructor(
    private dataServices: DataService
  ) { }

  afterViewInit(){
    if(this.ionList){
      this.ionList.closeSlidingItems();
    }
  }


  ngOnInit() {

    this.usuarios = this.dataServices.getusuario();
  }

  favorite(user: any){
    console.log('favorite', user);
    this.ionList?.closeSlidingItems();
  }
  share(user: any){
    console.log('share', user);
    this.ionList?.closeSlidingItems();
  }
  deleteUser(user:any)
  {
    console.log('Delete', user);
    this.ionList?.closeSlidingItems();
  }

}
