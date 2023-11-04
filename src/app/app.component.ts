import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent,
    NgFor
  ], 
})


export class AppComponent {
  isRed = false;
  change(){
    this.isRed = !this.isRed;
  };
  products = ['apple', 'orange', 'banana']
}
