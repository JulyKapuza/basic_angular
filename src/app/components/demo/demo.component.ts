import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {
  @Input() message: string[] | undefined ;
  @ViewChild('temp') tempPara: ElementRef | undefined

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges ');
  }
  ngOnInit() {
    console.log('ngOnInit');

  }
}
