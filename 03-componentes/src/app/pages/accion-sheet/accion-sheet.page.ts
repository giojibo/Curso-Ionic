import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-accion-sheet',
  templateUrl: './accion-sheet.page.html',
  styleUrls: ['./accion-sheet.page.scss'],
  standalone: false,
})
export class AccionSheetPage implements OnInit {

  constructor(
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
  }

  onClick(){
    this.presentActionSheet();
  }
    async presentActionSheet() {
      const actionSheet = await this.actionSheetCtrl.create({
        header: 'Albumes',
        backdropDismiss: false,
        buttons: [
          {
            text: 'Delete',
            role: 'destructive',
            icon: 'trash-outline',
            cssClass: 'Rojo',
            handler: ()=> {
              console.log('Delete clicked');
            }
          },
          {
            text: 'Share',
            icon: 'share-outline',
            handler: ()=> {
              console.log('Shared clicked');
            }
          },
          {
            text: 'Play (open modal)',
            icon: 'caret-forward-circle-outline',
            handler: ()=>{
              console.log('Play clicked');
            }
          },
          {
            text: 'Favorite',
            icon: 'heart-outline',
            handler: ()=>{
              console.log('Favorite clicked');
            }
          },
          {
            text: 'Cancel',
            icon: 'close-outline',
            role:'cancel',
            handler: ()=>{
              console.log('Cancel clicked');
            }
          },
        ],
      });

      await actionSheet.present();
    }
  }

