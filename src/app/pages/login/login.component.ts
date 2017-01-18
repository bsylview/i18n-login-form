import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { AlertService } from '../../services/alert.service';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user = new User('', '');
  public loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this._fb.group({
      name: ['', [<any>Validators.required, <any>Validators.minLength(5), <any>Validators.maxLength(20)]],
      password: ['', [<any>Validators.required, <any>Validators.minLength(8)]],
    });
  }

  constructor(private _authenticationService: AuthenticationService, private _alertService: AlertService, private _fb: FormBuilder) { }

  onSubmit(_user: User, _isValid: boolean) {
    if (_isValid) {
      this.loginUser(_user);
    }
  }

  loginUser(_user: User) {
    this._authenticationService.login(_user)
      .subscribe(
        data => {
            this._alertService.success("Login successful!");
        },
        error => {
          this._alertService.error(error);
        });
  }

}
