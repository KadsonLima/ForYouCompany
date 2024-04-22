import { Component } from '@angular/core';
import { ContainerContentComponent } from '../../container-content/container-content.component';

@Component({
  selector: 'app-depoimentos',
  standalone: true,
  imports: [ContainerContentComponent],
  templateUrl: './depoimentos.component.html',
  styleUrl: './depoimentos.component.css'
})
export class DepoimentosComponent {

}
