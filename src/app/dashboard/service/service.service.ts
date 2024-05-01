import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  currentPage = 1;
  currentPageChanged = new Subject<number>();
  constructor(private http:HttpClient) { }

  getUsers(page: number): Observable<any> {
    return this.http.get(`https://reqres.in/api/users?page=${page}`).pipe(
      map((response: any) => {
         // Set totalItems to the total number of items
        return response.data;
      })
    );
  }


  getUserById(id:number):Observable<any>{
    return this.http.get(`https://reqres.in/api/users/${id}`).pipe( map((response: any) => response.data));
  }
  setCurrentPage(page: number) {
    this.currentPage = page;
    // Emit the new currentPage value to notify subscribers
    this.currentPageChanged.next(this.currentPage);
  }
}
