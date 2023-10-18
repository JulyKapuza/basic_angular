import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  name="Jul Kap"
  product={
    name: 'IPhone',
    price: 799,
    color: 'Blue',
    discount: 8.5,
    inStock: 10,
    pImage: '/assets/image/phone.png'
  }
  
  getDiscount(){
    return this.product.price - (this.product.price * this.product.discount / 100)
  }
}
