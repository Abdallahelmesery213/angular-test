import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() parentData: any;
  @Output() eventChild = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendData(){
    this.eventChild.emit("Hello from child comp")
  }

  showMsg(){
    console.log("I'm child Component");
  }

}
