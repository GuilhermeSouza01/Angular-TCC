import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  
  showTable: boolean = false;
  showContent():void {
    this.showTable = true;
  }
}
