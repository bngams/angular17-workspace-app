import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Menu } from '../../models/menu';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'lib-menu',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit, AfterViewInit {
  @Input({required: true}) menu!: Menu; 

  @ViewChild('ul') ul!: HTMLUListElement; 

  constructor() {
    console.log('Display input from constructor', this.menu);
    console.log('Display ViewChild from constructor', this.ul);
  }

  ngOnInit(): void {
    console.log('Display input from ngOnInit', this.menu);
    console.log('Display ViewChild from ngOnInit', this.ul);
  }
   
  ngAfterViewInit(): void {
    console.log('Display ViewChild from ngAfterViewInit', this.ul);
  }

  
}
