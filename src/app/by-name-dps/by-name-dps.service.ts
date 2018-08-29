import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ByNameDpsService {

  // private url = "dps/by-name/bintang/7371141006/001";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'my-auth-token'
    })
  };
  
  constructor(private http: HttpClient) { }

  // fetch() {
  //   return this.http.get(this.url);
  // }
   
  fetchUrl(url: string) {
    return this.http.get(`http://127.0.0.1:8000/api/${url}`);
    // return this.http.get(`http://192.168.8.106:8000/api/${url}`);
  }

}
