import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.page.html',
  styleUrls: ['./cocktail-details.page.scss'],
})
export class CocktailDetailsPage implements OnInit {
  cocktailId!: string | null;
  cocktail: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.cocktailId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.cocktailId) {
      this.http.get<any>('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.cocktailId)
        .subscribe(response => {
          this.cocktail = response.drinks[0];
        });
    }
  }
}