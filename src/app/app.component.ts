import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
  usersUrl = '/users';  // URL to web api

  users = null;

  constructor(private http: Http) {
    this.http.get(this.usersUrl)
      .subscribe(response => {
          console.log("Received data" + response.json());
          this.users = response.json();
        },
        err=> {
          console.log("Error getting data:"+ err);
        });
  }


}
