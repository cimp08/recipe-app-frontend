import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  url = `https://api.edamam.com/api/recipes/v2`;
  type = '?type=public';
  appId = '543f34ce';
  private apiKey!: string;
  result!: string;
  health!: string;
  dishType!: string;

  constructor(private httpClient: HttpClient) {
    this.apiKey = environment.API_KEY;
  }

  getAllRecipies(
    results: string,
    health: string,
    dishType: string
  ): Observable<any> {
    return this.httpClient.get<any>(
      `${this.url}${this.type}&q=${results}&app_id=${this.appId}&app_key=${
        this.apiKey
      }${health ? '&health=' + health : ''}${
        dishType ? '&dishType=' + dishType : ''
      }`
    );
  }

  getRecipe(id: number): Observable<any> {
    return this.httpClient.get(
      `${this.url}/${id}${this.type}&app_id=${this.appId}&app_key=${this.apiKey}`
    );
  }
}
