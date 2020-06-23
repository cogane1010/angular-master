import { Component } from '@angular/core';

import { AccountService } from './_services';
import { AppUser } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    user: string;

    constructor(private accountService: AccountService) {
        var isau = this.accountService.isAuthenticated()
        this.user = this.accountService.name;
        console.log('aaaaaa' + this.user)
    }

   
}