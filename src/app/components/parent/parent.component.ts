import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  fullName: string = "Abdullah Elmesery";
  messageFromChildComp: any;

  @ViewChild(ChildComponent)
  child: ChildComponent = new ChildComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized.
    console.log(this.child.showMsg())
  }

}
