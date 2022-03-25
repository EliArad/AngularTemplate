import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  Clock: string = "00:00:00";
  private counter: number = 0;
  constructor() { }

  ngOnInit(): void
  {

  }

  Increase(): void
  {
    this.counter++;
    let totalSeconds = this.counter;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    this.Clock = this.pad(hours, 2) + ":" + this.pad(minutes, 2).toString() + ":" + this.pad(seconds,2).toString();
  }

  pad(num: number, size: number): string {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }


}
