import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';

import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map, catchError } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';

import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  getPromotions(): Observable<Promotion[]> {
    return this.restangular.all('promotions').getList();
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.restangular.one('promotions', id).get();
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.restangular.all('promotions').getList({ featured: true })
      .pipe(map(dishes => dishes[0]));
  }

  constructor(private restangular: Restangular) { }
}
