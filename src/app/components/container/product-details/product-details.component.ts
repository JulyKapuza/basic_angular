import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  faXmark=faXmark

product:any;
}
