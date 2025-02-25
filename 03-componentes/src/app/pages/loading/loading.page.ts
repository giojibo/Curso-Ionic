import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
  standalone: false,
})
export class LoadingPage implements OnInit {
  loading: HTMLIonLoadingElement | undefined;

  constructor(
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
  }

  mostrarLoading()
  {
    this.presentLoading('Cargando, por favor espere...');

    setTimeout(()=> {
      this.loading?.dismiss();
    }, 2000);
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      message,
    });
    await this.loading.present();

    const { role, data } = await this.loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


}
