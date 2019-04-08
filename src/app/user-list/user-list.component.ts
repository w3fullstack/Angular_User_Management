import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  
  currentPage : any = 0;
  totalPages : any = 0;
  userList : any = [];

  constructor() { }

  ngOnInit() {
    this.loadData(0);
  }

  loadData(page: Number) {
    let self = this;
    let url = `https://reqres.in/api/users?page=${page}`;
    
    fetch(url) // Call the fetch function passing the url of the API as a parameter
      .then(function(response) {
        if (response.status !== 200) {
          return;
        }
        // Examine the text in the response
        response.json().then(function(data) {
          self.currentPage = data.page;
          self.totalPages = data.total_pages;
          self.userList = data.data;
        });
      })
      .catch(function() {
      });
  }

  onClickPrev() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadData(this.currentPage);
    }
  }

  onClickNext() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadData(this.currentPage);
    }
  }
}
