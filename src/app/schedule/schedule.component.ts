import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Schedule } from '../schedule';
import { Teams } from '../teams';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  schedule$: Schedule;
  team$: Teams[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getSchedule().subscribe(
      data => this.schedule$ = data
    );
  }
  getTeam(idTeam) {
    return this.schedule$.teams.find(t => t.id === idTeam);
  }
}
