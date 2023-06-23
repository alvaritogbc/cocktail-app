import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.page.html',
  styleUrls: ['./cocktails.page.scss'],
})
export class CocktailsPage implements OnInit {
  cocktails: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .subscribe(response => {
        this.cocktails = response.drinks;
      });
  }
}
