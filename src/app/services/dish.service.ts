import { Injectable } from '@angular/core';

import { Dish } from '../shared/dish';

import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map, catchError } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';

import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  getDishes(): Observable<Dish[]> {
    return this.restangular.all('dishes').getList();
  }

  getDish(id: number): Observable<Dish> {
    return this.restangular.one('dishes', id).get();
  }
  getFeaturedDish(): Observable<Dish> {
    return this.restangular.all('dishes').getList({ featured: true })
      .pipe(map(dishes => dishes[0]));
  }

  getDishIds(): Observable<number[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)), catchError(error => error ));
  }

  constructor(private restangular: Restangular) { }
}
