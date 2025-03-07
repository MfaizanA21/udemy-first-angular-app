import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// <<---ABOVE ARE THE TWO TYPES OF DECLARING A CUSTOM TYPE

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //this is how you can accept input from the components
  @Input({required: true}) user!: User;
  //WITHOUT SIGNAL 
  @Output() select = new EventEmitter();
  @Input({required: true}) selected!: boolean;

  //WITH SIGNAL
  // select = output<string>();
  // SIGNAL INPUTS
  // avatar = input.required<string>();
  // name = input.required<string>();

  // allUSers = DUMMY_USERS;
  // // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // imagePath = computed(() => {return 'assets/users/' + this.avatar()});

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // // this.selectedUser = DUMMY_USERS[randomIndex];
    // console.log('User selected:', this.selectedUser);
  }
}
