import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [ HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private getContacts() {}
}
