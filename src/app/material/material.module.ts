import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ]
})
export class MaterialModule { }
