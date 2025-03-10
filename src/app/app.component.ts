import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
// import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;

  selectedUserId?: string;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }
  
  onSelectUser(id: string) {
    this.selectedUserId = id;
    console.log('User selected:' + id);
  }

}
