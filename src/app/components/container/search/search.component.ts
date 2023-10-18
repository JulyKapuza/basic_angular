import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  searchText: string = '';

  onSearch(e: InputEvent | any) {
    this.searchText = e.target.value;
  }
}
