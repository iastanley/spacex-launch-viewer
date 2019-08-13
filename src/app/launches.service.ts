import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Launch } from './launch';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {
  launchesUrl = 'https://api.spacexdata.com/v3/launches';
  total = 103; // TODO - get value from Header "spacex-api-count"
  limit = 10;
  offset = 0;
  order = 'asc';

  constructor(
    private http: HttpClient
  ) { }

  getTotal() {
    return this.total;
  }

  getOffset() {
    return this.offset;
  }

  getLimit() {
    return this.limit;
  }

  getSortOrder() {
    return this.order;
  }

  setSortOrder(order: 'asc' | 'desc') {
    this.offset = 0; // return to first page when changing sort order
    this.order = order;
  }

  goToNextPage() {
    if ((this.total - this.offset) > this.limit) {
      this.offset += this.limit;
    }
  }

  goToPrevPage() {
    if (this.offset > 0) {
      this.offset -= this.limit;
    }
  }

  // get all launches based on limit and offset and order
  getLaunches(): Observable<Launch[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('limit', this.limit.toString());
    httpParams = httpParams.append('offset', this.offset.toString());
    httpParams = httpParams.append('order', this.order);
    const options = {
      params: httpParams
    };

    return this.http.get<Launch[]>(this.launchesUrl, options)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    let errorMsg;
    
    if (error.error instanceof ErrorEvent) {
      errorMsg = error.error.message;
      console.error('An error occurred:', error.error.message);
    } else {
      errorMsg = `Server returned error with status code ${error.status}.`;
      console.error(
        `Server returned ${error.status}, ` +
        `body was: ${error.error}`);
    }
    
    return throwError(errorMsg);
  };
}
