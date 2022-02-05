import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PeopleServiceService } from 'src/shared/services/people-service.service';
import { Person } from 'src/shared/models/person.model';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnChanges {
  candidates!: Array<any>;
  @Input() idToProfile!: any;
  candidateToShow!: any;

  constructor(private peopleService: PeopleServiceService){}

  ngOnInit(): void {
    this.getPeopleDetails();
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes['idToProfile'].currentValue)
    console.log(this.candidates[this.idToProfile])
    if (changes['idToProfile']) {
      this.candidateToShow = this.candidates[this.idToProfile];
    }
  }

  getPeopleDetails() {
    this.peopleService.getPeople().subscribe(
      (data)=>{
        this.candidates = Object.keys(data).map(key => data[key]).flat();
      })
  }

}
