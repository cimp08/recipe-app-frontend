import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  url = `https://api.edamam.com/api/recipes/v2`;
  type = '?type=public';
  appId = '543f34ce';
  appKey = 'ff5d93b323e1a6cecabf8028a38044cd';
  result!: string;
  health!: string;
  dishType!: string;

  constructor(private httpClient: HttpClient) {}

  getAllRecipies(
    results: string,
    health: string,
    dishType: string
  ): Observable<any> {
    return this.httpClient.get<any>(
      `${this.url}${this.type}&q=${results}&app_id=${this.appId}&app_key=${
        this.appKey
      }${health ? '&health=' + health : ''}${
        dishType ? '&dishType=' + dishType : ''
      }`
    );
  }

  getRecipe(id: number): Observable<any> {
    return this.httpClient.get(
      this.url +
        '/' +
        id +
        this.type +
        '&app_id=' +
        this.appId +
        '&app_key=' +
        this.appKey
    );
  }
}
