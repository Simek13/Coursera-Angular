import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map, catchError } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';

import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders(): Observable<Leader[]> {
    return this.restangular.all('leaders').getList();
  }

  getLeader(id: number): Observable<Leader> {
    return this.restangular.one('leaders', id).get();
  }
  getFeaturedLeader(): Observable<Leader> {
    return this.restangular.all('leaders').getList({ featured: true })
      .pipe(map(dishes => dishes[0]));
  }

  constructor(private restangular: Restangular) { }
}
