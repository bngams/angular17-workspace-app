import { Component, Input } from '@angular/core';
import { Menu } from '../../models/menu';
import { NgFor } from '@angular/common';

@Component({
  selector: 'lib-menu',
  standalone: true,
  imports: [NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input({required: true}) menu!: Menu;
}
