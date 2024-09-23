import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrl: './meu-componente.component.css'
})
export class MeuComponenteComponent {

  @Input('preco')
  public valor: number = 0;

  @Input('cor')
  public modoCor: number = 1;

  public classeCor = 'cor-1'

  ngOnInit(): void {
    switch (this.modoCor) {
      case 1:
        this.classeCor = 'cor-1'
        break;
      case 2:
        this.classeCor = 'cor-2'
        break;
      case 3:
        this.classeCor = 'cor-3'
        break;
      default:
        this.classeCor = 'cor-1'
    }

    console.log(this.classeCor)
  }
}
