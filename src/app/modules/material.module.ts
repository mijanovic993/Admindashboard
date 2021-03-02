import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const matModules = [
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...matModules
  ],
  exports:[
    CommonModule,
    ...matModules
  ]
})
export class MaterialModule { }
