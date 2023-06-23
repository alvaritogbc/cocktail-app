import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { CocktailsPage } from './cocktails.page';

const routes: Routes = [
  {
    path: '',
    component: CocktailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CocktailsPage]
})
export class CocktailsPageModule {}