import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import {LoginRegisterComponent} from "./components/login-register/login-register.component";
import {HomeComponent} from "./components/home/home.component";
import { NewCarComponent} from "./components/new-car/new-car.component";
import { EditCarComponent} from "./components/edit-car/edit-car.component";
import { CarDetailComponent} from "./components/car-detail/car-detail.component";
import {PerfilUserComponent} from "./components/perfil-user/perfil-user.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginRegisterComponent },
  { path: 'perfil', component: PerfilUserComponent},
  { path: 'car/new', component: NewCarComponent},
  { path: 'car/detail/:id', component: CarDetailComponent},
  { path: 'car/edit/:id', component: EditCarComponent}
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
