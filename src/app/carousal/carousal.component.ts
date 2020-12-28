import {AfterViewInit,Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit {

  description:string;
  videoLink:any="https://www.youtube.com/embed/1icCS2O4ROA"
  constructor() { }
  
  ngOnInit(){}

}
