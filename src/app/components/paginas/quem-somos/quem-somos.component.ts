import { Component } from '@angular/core';
import { ContainerContentComponent } from "../../container-content/container-content.component";

@Component({
    selector: 'app-quem-somos',
    standalone: true,
    templateUrl: './quem-somos.component.html',
    styleUrl: './quem-somos.component.css',
    imports: [ContainerContentComponent]
})
export class QuemSomosComponent {

}
