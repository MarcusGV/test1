import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material/material.module'
import {ReactiveFormsModule} from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { NotebookComponent } from './components/notebook/notebook.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
