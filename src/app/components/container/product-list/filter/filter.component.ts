import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input()
  all: number = 0;
  @Input()
  inStock: number = 0;
  @Input()
  outOfStock: number = 0;

  @Output() selectedChange = new EventEmitter<string>()

  selectedFilter:string ='all'

  onSelectedFilterChange(){
    this.selectedChange.emit(this.selectedFilter)
  }
}
