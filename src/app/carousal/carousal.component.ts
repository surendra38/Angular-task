import {AfterViewInit,Component, OnInit, Renderer2 } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit {

  description:string;
  constructor() { }
  
  ngOnInit(){}

}
