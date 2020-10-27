import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {CarService} from "../../services/car.service";
import {CarModel} from "../../models/Car.model";

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.sass'],
  providers: [UserService, CarService]
})
export class NewCarComponent implements OnInit {
  public title: string;
  public identity: any;
  public token: string;
  public car: CarModel;
  public message: string;
  public status_car: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _carService: CarService
  ) {
    this.title = 'Crear nuevo vehículo'
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit(): void {
    if (!this.identity && !this.token) {
      this._router.navigate(['/login']);
    } else {
      this.car = new CarModel(1, '', '', '', '', '', null, '', null, null);
    }
  }

  sendData(form) {
    console.log(this.car);
    this._carService.createCar(this.token, this.car).subscribe(
      response => {
        if(response.code === 'success'){
        console.log(response);
          this.status_car = 'success';
          this.car = response.car;
          this.message = response.message;
          this._router.navigate(['/']);
        } else {
          this.status_car = 'error'
        }
      },
      error => {
          console.log(error);
        if( error.error.message === 'Token expirado'){
          localStorage.clear();
          this._router.navigate(['/login']);
        }
          this.status_car = 'error';
          this.message = error.error.message;
      });
  }

}
