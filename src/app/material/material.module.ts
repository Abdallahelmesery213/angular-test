// structure of material

import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  imports: [],
  exports: [MatButtonModule, MatButtonToggleModule, MatIconModule]
})
export class MaterialModule { }
