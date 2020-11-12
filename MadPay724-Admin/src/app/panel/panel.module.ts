import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { PanelComponent } from './panel.component';
import { PanelRoutes } from './routes/routes';



@NgModule({
  declarations: [PanelComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(PanelRoutes)
  ]
})
export class PanelModule { }
