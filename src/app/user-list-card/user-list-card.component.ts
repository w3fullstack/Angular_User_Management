import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-list-card',
  templateUrl: './user-list-card.component.html',
  styleUrls: ['./user-list-card.component.scss']
})
export class UserListCardComponent implements OnInit {
  @Input() user;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  clickMe() {
    this.router.navigate(['/user/'+this.user.id]);
  }
}

