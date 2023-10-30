import { Component } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private service: UserService) {}
  respdata: any;
  proceedLogin(loginData: any) {
    console.log(loginData.valid);
    if (loginData.valid) {
      this.service.proceedLogin(loginData.value).subscribe((item) => {
        this.respdata = item;
        console.log(' this.resdata', this.respdata);
        if (this.respdata !== null) {
          localStorage.setItem('token', this.respdata.token);
        }
      });
    }
  }
}
