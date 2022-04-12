import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { List } from './list';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiURL = 'http://localhost:8000/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(user_id: any): Observable<List[]> {
    return this.httpClient
      .get<List[]>(this.apiURL + '/lists/' + user_id)
      .pipe(catchError(this.errorHandler));
  }

  getAllRecipies(list_id: number): Observable<Recipe[]> {
    return this.httpClient
      .get<Recipe[]>(this.apiURL + '/recipies/' + list_id)
      .pipe(catchError(this.errorHandler));
  }

  deleteRecipe(id: number) {
    return this.httpClient
      .delete<Recipe>(this.apiURL + '/recipies/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  saveRecipe(recipe: any): Observable<Recipe> {
    return this.httpClient
      .post<Recipe>(
        this.apiURL + '/recipies',
        JSON.stringify(recipe),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  create(list: any): Observable<List> {
    return this.httpClient
      .post<List>(
        this.apiURL + '/lists',
        JSON.stringify(list),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  find(id: string | number): Observable<List[]> {
    return this.httpClient
      .get<List[]>(this.apiURL + '/list/' + id)
      .pipe(catchError(this.errorHandler));
  }

  update(id: string | number, list: any): Observable<List> {
    return this.httpClient
      .put<List>(
        this.apiURL + '/lists/' + id,
        JSON.stringify(list),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  delete(id: string | number) {
    return this.httpClient
      .delete<List>(this.apiURL + '/lists/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
