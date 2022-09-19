import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  fullName: string = "Abdullah Elmesery";
  constructor() { }

  ngOnInit(): void {
  }

}
