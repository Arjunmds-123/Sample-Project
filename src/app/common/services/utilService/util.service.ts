import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private searchTextObserver$: Subject<string>; 

  constructor() {
    this.searchTextObserver$ = new Subject();
  }

  setDashboardMenuValue(searchText: string) {
    this.searchTextObserver$.next(searchText);
  }

  getDashboardMenuValue() {
    return this.searchTextObserver$.asObservable();
  }

}
