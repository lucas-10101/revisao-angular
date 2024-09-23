import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrl: './simple-card.component.css'
})
export class SimpleCardComponent {

  @Input()
  public cardTitle? : string;

  @Input()
  public cardText? : string;

  @Input()
  public buttonText? : string;
}
