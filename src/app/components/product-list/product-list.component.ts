import { Component } from '@angular/core';
import { faSquareMinus, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  addToCard: number = 0;
  name = '';
  product = {
    name: 'IPhone',
    price: 799,
    color: 'Blue',
    discount: 8.5,
    inStock: 10,
    pImage: '/assets/image/phone.png',
  };
  faSquareMinus = faSquareMinus;
  faSquarePlus = faSquarePlus;

  getDiscount() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }

  onNameChange(e: any) {
    this.name = e.target.value;
  }

  decrease() {
    if (this.addToCard > 0) {
      this.addToCard -= 1;
    }
  }

  increase() {
    if (this.addToCard < this.product.inStock) {
      this.addToCard += 1;
    }
  }
}
