import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private service: UserService, private route:Router) {}

  ngOnInit(): void{
    localStorage.clear()
  }
  respdata: any;
  proceedLogin(loginData: any) {
    console.log(loginData.valid);
    if (loginData.valid) {
      this.service.proceedLogin(loginData.value).subscribe((item) => {
        this.respdata = item;
        console.log(' this.resdata', this.respdata);
        if (this.respdata !== null) {
          localStorage.setItem('token', this.respdata.token);
          this.route.navigate(['/'])
        }
      });
    }
  }
}
