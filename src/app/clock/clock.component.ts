import { DatePipe, formatDate } from '@angular/common';
import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { timeInterval, timer } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit {
  digits: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  secondHandPosition: number = 0;
  hourHandPosition: number = 0;
  minuteHandPosition: number = 0;
  day = '';

  constructor() {}

  ngOnInit(): void {
    timer(0, 1000).subscribe((res) => {
      let date = new Date();
      let second = date.getSeconds();
      let minute = date.getMinutes();
      let hour = date.getHours();

      this.day = formatDate(date, 'MMM', 'en-us');

      this.secondHandPosition = second * 6;
      this.minuteHandPosition = minute * 6;
      this.hourHandPosition = hour * 30 + minute * 0.5 + second * 0.008333;
    });
  }
}
