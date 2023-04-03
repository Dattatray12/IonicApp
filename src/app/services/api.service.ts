import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_path = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {

   }

   getListPosts(): Observable<any> {
    
    return this.http.get(this.base_path+'/posts');
  }
}
