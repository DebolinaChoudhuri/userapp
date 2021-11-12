import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseURL = "http://localhost:8080/api/v1/users";

  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<Users[]>{
    return this.httpClient.get<Users[]>(`${this.baseURL}`);
  }

  createUsers(user: Users): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, user);
  }

  createUsers1(user1: Users): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, user1);
  }

  getUsersById(id: number): Observable<Users>{
    return this.httpClient.get<Users>(`${this.baseURL}/${id}`);
  }

  updateUsers(id: number, user: Users): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, user);
  }

  deleteUsers(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
