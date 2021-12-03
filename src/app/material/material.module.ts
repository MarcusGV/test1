import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatListModule
  ],
  exports:[
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatListModule
  ]
})
export class MaterialModule { }
