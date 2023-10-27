import { Component } from '@angular/core';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss']
})
export class HeaderHomeComponent {
 menuTop=[
  {name:'Help', path:'/'},
  {name:'Exchange & Returns', path:'/'},
  {name:'OrderTracker', path:'/'},
  {name:'SingUp/Login', path:'login'},
 ]


}
