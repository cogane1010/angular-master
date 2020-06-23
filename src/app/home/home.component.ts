import { Component } from '@angular/core';

import { AppUser } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: string;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.name;
    }
}