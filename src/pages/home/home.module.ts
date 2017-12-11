import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    HomePage,
    HttpModule,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule { }
