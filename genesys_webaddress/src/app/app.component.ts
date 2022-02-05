import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'genesys_webaddress'
  @Input() id!: number;
  // @Output() idToProfile: EventEmitter<Number> = new EventEmitter();
 idToProfile = 0;
  getProfile(id: any){
    console.log(id)
    this.idToProfile = id;
  }
}
