import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.scss']
})
export class AddcontactComponent {
 constructor(private route:ActivatedRoute){

 }

 ngOnInit(){
  const routeId = this.route.snapshot.paramMap.get('id')
  console.log('routeId', routeId);
  
}
}
