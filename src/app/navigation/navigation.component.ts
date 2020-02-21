import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

  isLogged: boolean = false;
  isLoggedSubscription: Subscription;

  getCurrentUserEmail(){
    return this.userService.currentUserEmail;
  }

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.isLoggedSubscription = this.userService.isLoggedChanged.subscribe((data) => {
      this.isLogged = data;
    });
  }

  ngOnDestroy() {
    this.isLoggedSubscription.unsubscribe();
  }

  logout() {
    this.userService.logout();
  }
}
