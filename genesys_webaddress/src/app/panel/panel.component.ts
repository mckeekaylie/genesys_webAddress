import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/shared/models/person.model';
import { PeopleServiceService } from 'src/shared/services/people-service.service';
import { faAddressBook, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  entries!: Array<Person>;
  entriesAlphabetical!: Array<Person>;
  @Output() personSelected: EventEmitter<Person> = new EventEmitter();
  faAddressBook = faAddressBook;
  faSortUp = faSortUp;
  faSortDown = faSortDown;

  constructor(private peopleService: PeopleServiceService){}

  ngOnInit(): void {
    this.getPeopleDetails();
  }

  getPeopleDetails() {
    this.peopleService.getPeople().subscribe(
      (data)=>{
        this.entries = Object.keys(data).map(key => data[key]).flat()
        this.entriesAlphabetical = this.entries.sort(function(a,b) {
          var nameA = a.name.toUpperCase();
          var nameB = b.name.toUpperCase();
          if(nameA < nameB){return -1}
          if(nameA > nameB){return 1}
          return 0
        });
      })
  }

  showProfile(person: any) {
    this.personSelected.emit(person);
  }

  changeSortDesc(){
    return this.entriesAlphabetical.sort(function(a,b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if(nameA < nameB){return 1}
      if(nameA > nameB){return -1}
      return 0
    });
  }

  changeSortAsc(){
    return this.entriesAlphabetical.sort(function(a,b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if(nameA < nameB){return -1}
      if(nameA > nameB){return 1}
      return 0
    });
  }

  filter(event: any) {
    console.log(event.target.value)
    console.log(this.entriesAlphabetical)
    for(let i = 0; i < this.entriesAlphabetical.length; i++){
      let name = this.entriesAlphabetical[i].name
      if(name.includes(event.target.value.toString())){
        console.log('yes')
      }
    }
  }
}
