import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import {Subscription} from 'rxjs'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = 'Task with Angular';
  showAddTask: boolean=false;
  subscripton: Subscription | undefined;

  constructor(private uiService:UiService){
 this.subscripton = this.uiService.onToggle().subscribe((value)=>(this.showAddTask = value))
  }
  toggleAddTask(){
   this.uiService.toggleAddTask()
  }
}
