import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
  standalone: false,
})
export class ModalInfoPage implements OnInit {

  @Input() nombre: string | undefined;
  @Input() pais: string | undefined;

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }
  salirSinArgumentos()
  {
    this.modalCtrl.dismiss();
  }

  salirConArgumentos()
  {

    this.modalCtrl.dismiss({
      nombre: 'Felipe',
      pais: 'España'
    });
  }


}
