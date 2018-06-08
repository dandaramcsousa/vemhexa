import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedule } from './schedule';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getSchedule() {
    return this.http.get('../assets/data.json')
  }
}
