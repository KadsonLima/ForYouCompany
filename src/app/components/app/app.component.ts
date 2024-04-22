import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerContentComponent } from '../container-content/container-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContainerContentComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ForYou-Company';
}
