import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user';


@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  constructor(private http: HttpClient) { }

  private usersSubject = new Subject<User[]>();

  fetchUsers(){
    return this.http.get(environment.userApi, this.createHttpOptions()).pipe(
      catchError(err => of([]))
    ).subscribe(
      (data: User[]) => {
        this.usersSubject.next(data['user']);
      }
    );
  }

  getUsers() {
    return this.usersSubject.asObservable();
  }

  createUser(user: User) {
    return this.http.post(environment.userApi, user, this.createHttpOptions())
    .pipe(
      catchError(err => of([]))
    ).subscribe(
      (data: User[])=>{
        this.usersSubject.next(data['user'])
      }
    );
  }

  createHttpOptions() {
    let username: string = environment.username;
    let password: string = environment.password;
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Basic ' + btoa(`${username}:${password}`)
        })
    };
    return httpOptions;
  }

}
