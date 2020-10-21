import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// Routes
import {AppRoutingModule } from  './app.routing';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { HomeComponent } from './components/home/home.component';
import { NewCarComponent } from './components/new-car/new-car.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { PerfilUserComponent } from './components/perfil-user/perfil-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    LoginRegisterComponent,
    HomeComponent,
    NewCarComponent,
    EditCarComponent,
    CarDetailComponent,
    PerfilUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
