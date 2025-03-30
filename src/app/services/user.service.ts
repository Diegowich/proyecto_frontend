import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class userService {
  private apiUrl = 'http://localhost:3005/api';

  constructor(private http: HttpClient) { }

  getAllUsers () : Observable<any> {
    return this.http.get(`${this.apiUrl}/users`)
  }
   
  createUser(user: any) : Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/createuser`,user);
  }
  userLogin(user: any) : Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/login`,user);
  }
  findUser(user:string) : Observable<any> {
    return this.http.get(`${this.apiUrl}/finduser/${user}`);
  }
  editUser(user:any) : Observable<any> {
    return this.http.put(`${this.apiUrl}/edituser`, user)
  }
  deleteUser(user:any) : Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteuser/${user}`);
  }
}