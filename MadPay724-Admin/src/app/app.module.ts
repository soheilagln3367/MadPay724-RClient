import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelModule } from './panel/panel.module';
import { Router, RouterModule } from '@angular/router';
import { AdminRoutes } from './routes/routes';
import { AuthModule } from './auth/auth.module';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PanelModule,
    RouterModule.forChild(AdminRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
