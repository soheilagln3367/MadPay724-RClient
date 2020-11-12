import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AuthComponent } from './auth.component';
import { authRoutes } from './routes/routes';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [AuthComponent,
     LoginComponent,
     RegisterComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(authRoutes)
  ]
})
export class AuthModule { }
