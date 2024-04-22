import { Component } from '@angular/core';
import { ContainerContentComponent } from '../../container-content/container-content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContainerContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
