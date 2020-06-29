import { Component } from '@angular/core';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'layout.component.html' })
export class LayoutComponent { 
    constructor(private accountService: AccountService) {
       
    }

    logout() {
        this.accountService.signout();
    }
}