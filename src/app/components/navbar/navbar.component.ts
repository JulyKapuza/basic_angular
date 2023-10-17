import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  faMagnifyingGlass = faMagnifyingGlass;
   menu=[
  {name:'Home', path:'/'},
  {name:'Products', path:'/products'},
  {name:'About', path:'/about'},
  {name:'Contacts', path:'/contacts'},
 ]
}
