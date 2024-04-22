import { Component } from '@angular/core';
import { ContainerContentComponent } from '../../container-content/container-content.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ContainerContentComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
