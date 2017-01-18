import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthenticationService {

  constructor(private _http: Http) { }

  login(_user: User):  Observable<User>{
    // return this._http.post('/api/authenticate', JSON.stringify({ username: _user.name, password: _user.password }))
    //       .map((response: Response) => {
    //           let user = response.json();
    //           return user;
    //       });
    return Observable.create(observer => {
      observer.next(_user);
      observer.complete();
    });
  }
}
