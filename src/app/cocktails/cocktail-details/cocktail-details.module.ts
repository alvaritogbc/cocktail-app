import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CocktailDetailsPage } from './cocktail-details.page';

const routes: Routes = [
  {
    path: '',
    component: CocktailDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CocktailDetailsPage]
})
export class CocktailDetailsPageModule {}