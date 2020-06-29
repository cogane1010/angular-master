import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AppUser } from '@app/_models'
import { AccountService, AlertService } from '@app/_services';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
    success: boolean;
    error: string;
    userRegistration: AppUser = { id:'', username:'', name: '', email: '', password: ''};
    submitted: boolean = false;

    constructor(private accountService: AccountService, 
                private spinner: NgxSpinnerService,
                private router: Router,
                private route: ActivatedRoute,
                private alertService: AlertService) { }

    ngOnInit() {
      
    }

    onSubmit() {
        this.spinner.show();

        // reset alerts on submit
        this.alertService.clear();

        this.accountService.register(this.userRegistration)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error => {
                    this.alertService.error(error);
                });
    }
}