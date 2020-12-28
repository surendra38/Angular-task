
import { Component, HostListener, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-config';


@Component({
  selector: 'app-device-with-content',
  templateUrl: './device-with-content.component.html',
  styleUrls: ['./device-with-content.component.scss']
})
export class DeviceWithContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.startTimer()
  }

  index: number = 5;
  interval;

  imgs: string[] = [

    'assets/features_live_tracking.png',
    'assets/features_anti_theft.png',
    'assets/features_engine_lock.png',
    'assets/features_stats.png',
    'assets/features_safezone.png',
    'assets/features_analytics.png'];

  logos: string[] = [
    'assets/icons/ic_live_track.png',
    'assets/icons/ic_anti_alarm.png',
    'assets/icons/ic_engine_lock.png',
    'assets/icons/ic_stats.png',
    'assets/icons/ic_geofence.png',
    'assets/icons/ic_analytics.png'];


  titles: string[] = ['Live GPS tracking with Playback history', 'Instant Anti Theft Alarm', 'Remote Engine Lock', 'Daily statistics', 'Safezone', 'Graphical Report'];
  descriptions: string[] = [
    'Shows accurate location of vehicle using its high quality GPS antenna. The device updates location every 10 seconds while in motion and keeps you connected in idle condition.',
    'Get notified in case of theft by alarm notification. (if ignition is turned on or vehicle is moved via towing or pushing)',
    'Simply turn off your vehicle by swiping down in app. The vehicle will be turned off within seconds if driven in less than 10 km/hr or in idle state.',
    'All the daily stats like Run time, Idle time, Stoppage time, Distance, Average speed and Max speed are shown on daily basis.',
    'Use safezone feature to create safezone around your vehicle to get notified as soon as the vehicle enter/exit state in that region.',
    'Check 14 days graphical report of your vehicle in Analytics section by default and change the dates with calender option available on the top section.'
  ];

  startTimer() {
    if (this.interval == null) {
      this.interval = setInterval(() => {
        if (this.index == 0) {
          this.index = 5;
        }
        --this.index;
      }, 2000)
    }
  }

  ngOnDestroy(): void {
    this.pauseTimer();
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
