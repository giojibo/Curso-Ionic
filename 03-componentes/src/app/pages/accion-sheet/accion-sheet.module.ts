import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccionSheetPageRoutingModule } from './accion-sheet-routing.module';

import { AccionSheetPage } from './accion-sheet.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccionSheetPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AccionSheetPage]
})
export class AccionSheetPageModule {}
