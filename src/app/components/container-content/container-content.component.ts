import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-container-content',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './container-content.component.html',
  styleUrl: './container-content.component.css'
})
export class ContainerContentComponent {

}
