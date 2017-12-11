import { Component } from '@angular/core';
import { NavController, IonicPage, LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    providers: [AuthServiceProvider]

})
export class HomePage {

  loading: any;
  loginData = { email: '', password: '' };
  data: any;

  constructor(public navCtrl: NavController, public authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController) { }

  doLogin() {
    this.showLoader();
    this.authService.login(this.loginData).then((result) => {
      this.loading.dismiss();
      this.data = result;
      localStorage.setItem('token', this.data.access_token);
      console.log(this.loginData+this.data.token);
      /*this.navCtrl.setRoot(TabsPage);*/
    }, (err) => {
      console.log("error");
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  register() {
    /*this.navCtrl.push(RegisterPage);*/
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
