import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PeopleServiceService } from 'src/shared/services/people-service.service';
import { Person } from 'src/shared/models/person.model';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  candidates!: Array<any>;
  @Output() num: EventEmitter<Number> = new EventEmitter();
  
  constructor(private peopleService: PeopleServiceService){}

  ngOnInit(): void {
    this.getPeopleDetails();
  }

  getPeopleDetails() {
    this.peopleService.getPeople().subscribe(
      (data)=>{
        this.candidates = Object.keys(data).map(key => data[key]).flat();
      })
  }

  showProfile(i: any) {
    console.log(i)
    this.num.emit(i);
  }
}
