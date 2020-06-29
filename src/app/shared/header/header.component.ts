import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from '@app/_services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  name: string;
  isAuthenticated: boolean;
  subscription:Subscription;

  constructor(private authService:AccountService) { }

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.name = this.authService.name;
  } 

   async logout() {
    await this.authService.signout();     
  }

  // ngOnDestroy() {
  //   // prevent memory leak when component is destroyed
  //   this.subscription.unsubscribe();
  // }
}
