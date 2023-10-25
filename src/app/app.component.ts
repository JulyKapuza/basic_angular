import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  inputVal: string[] = ['Hello', 'Hi There']

  onBtnClick(inputEl: HTMLInputElement) {
    this.inputVal.push(inputEl.value)
  }
}
