import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import {Subscription} from 'rxjs'
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = 'Task with Angular';
  showAddTask: boolean=false;
  subscripton: Subscription | undefined;

  constructor(private uiService:UiService, private router:Router){
 this.subscripton = this.uiService.onToggle().subscribe((value)=>(this.showAddTask = value))
  }
  toggleAddTask(){
   this.uiService.toggleAddTask()
  }

  hasRoute(route:string){
    return this.router.url === route
  }
}
