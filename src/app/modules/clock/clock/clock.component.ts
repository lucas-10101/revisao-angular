import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent {

  public time = "";

  ngOnInit(): void {
    setInterval(() => {
      this.time = new Date().toUTCString();
    }, 1000);
  }
}
