import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit {

  constructor() { }

  description=" With the Help of live car location tracker you can see each and every movement of your vehicle on mobile phone. You can see which routes your car has taken throughtout the day with all the stoppage.";
  ngOnInit(): void {
  }

}
