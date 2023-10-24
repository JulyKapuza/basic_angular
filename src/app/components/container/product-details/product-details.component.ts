import { Component, Input } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ProductListComponent } from '../product-list/product-list.component';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  @Input() productListComp: ProductListComponent | undefined;
  faXmark = faXmark;

  product: any;
  ngOnInit() {
    this.product = this?.productListComp?.selectedProduct;
  }

  close(){
    this.product = null;

  }
}
