import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './root/components/home/home.component';
import { NavbarComponent } from './root/components/navbar/navbar.component';
import { FreeEventsComponent } from './events/components/free-events/free-events.component';
import { ProEventsComponent } from './events/components/pro-events/pro-events.component';
import { UpdateEventsComponent } from './events/components/update-events/update-events.component';
import { LoginComponent } from './users/components/login/login.component';
import { RegisterComponent } from './users/components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FreeEventsComponent,
    ProEventsComponent,
    UpdateEventsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
