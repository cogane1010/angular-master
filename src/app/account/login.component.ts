import { Component, OnInit } from '@angular/core';
import { AccountService } from '@app/_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit { 

  constructor(private authService: AccountService) { }    
  
    title = "Login";
    
    login() {     
      this.authService.login();
    }   

    ngOnInit() {
    }
}


 