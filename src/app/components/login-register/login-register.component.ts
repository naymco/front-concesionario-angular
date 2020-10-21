import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../models/User.model";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {typeCheckFilePath} from "@angular/compiler-cli/src/ngtsc/typecheck";


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.sass'],
  providers: [UserService]
})
export class LoginRegisterComponent implements OnInit {

  public register: boolean;
  public user: UserModel;
  public code: any;
  public status: any;
  public token: string;
  public identity: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.register = true;
    this.user = new UserModel(1, 'admin', '', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
    let user = this._userService.getIdentity();
    console.log(user);
  }

  handleClick(event) {
    event.preventDefault();
    this.register = !this.register;
  }

  loginSubmit(form) {
    this._userService.loginUser({email: this.user.email, password: this.user.password}).subscribe(
      response => {
        if (response.code === 'success') {
          this.status = 'success';
          this.code = response.message;
          this.token = response.token;
          this.identity = response.user;
          localStorage.setItem('token', this.token);
          localStorage.setItem('identity', JSON.stringify(this.identity));
          form.reset();
          setTimeout(() => {
            this._router.navigate(['/']);
          }, 2000)
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error)
        this.status = 'error'
        this.code = error.error.message;
      }
    )
  }

  onSubmit(form) {
    this._userService.registerUser(this.user).subscribe(
      response => {
        if (response.code === 'success') {
          this.status = 'success';
          this.code = response.message
          form.reset();
          setTimeout(() => {
            this._router.navigate(['/login']);
          }, 2000)
        } else {
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
        this.code = error.error.message;
      }
    )
  }
}
