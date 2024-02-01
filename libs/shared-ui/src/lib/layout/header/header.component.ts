import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [MatToolbarModule, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input({required: true}) title!: string;
}
