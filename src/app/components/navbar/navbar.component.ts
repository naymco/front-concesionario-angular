import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService} from "../../services/user.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
  providers: [UserService]
})
export class NavbarComponent implements OnInit, DoCheck {
  public identity: any;
  public token: string;
  public login: boolean;

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngDoCheck(): void {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  logout()
  {
    localStorage.clear();
    setTimeout(()=>{
    this._router.navigate(['/login']);
    }, 500)
  }

}
