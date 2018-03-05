import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  trendsData:any = { 
    total: 100,
    withIndueData : 81,
    overDue : 19,
    unit: 'pecentage'
    };

  }
