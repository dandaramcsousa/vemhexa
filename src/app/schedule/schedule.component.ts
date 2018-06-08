import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  schedule$: Object;
  team$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getSchedule().subscribe(
      data => this.schedule$ = data
    )
  }
}
