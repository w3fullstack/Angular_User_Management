import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  id: any = 0;
  firstName: any = "";
  lastName: any = "";
  avatarUrl: any = "";

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.loadData();
    });
  }

  loadData() {
    let self = this;
    let url = `https://reqres.in/api/users/${this.id}`;
    
    fetch(url) // Call the fetch function passing the url of the API as a parameter
      .then(function(response) {
        if (response.status !== 200) {
          return;
        }
        // Examine the text in the response
        response.json().then(function(data) {
          self.firstName = data.data.first_name;
          self.lastName = data.data.last_name;
          self.avatarUrl = data.data.avatar;
        });
      })
      .catch(function() {
      });
  }
  onClickBack() {
    this.router.navigate(['/userlist']);
  }
}
