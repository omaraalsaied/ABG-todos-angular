import { Component } from '@angular/core';
import {AppHeaderComponent} from './components/app-header/app-header.component';

@Component({
  selector: 'app-root',
  imports: [AppHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todos';
}
