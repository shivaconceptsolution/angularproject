import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
//  private url = 'http://jsonplaceholder.typicode.com/posts';
  private url='https://localhost:7122/api/Students';
  private url1='https://localhost:7122/api/Students';
  private url2='https://localhost:7122/api/Students';
  constructor(private httpClient: HttpClient) { }
  findPosts(): Observable<any> {
   
    //alert(id);
    return this.httpClient.get('https://localhost:7122/api/Students/2');
  }
  getPosts(){
    return this.httpClient.get(this.url);
  }
  addPosts(data: any): Observable<any> {
    return this.httpClient.post<any>(this.url1,data);
  }
  updatePosts(id:number, data: any): Observable<any> {
  
    return this.httpClient.put<any>(this.url2+"/"+id,data);
  }
  deletePosts(id:number): Observable<any> {
  // this.url2 = this.url2+"/"+id;
    return this.httpClient.delete<any>(this.url2+"/"+id);
  }
}
