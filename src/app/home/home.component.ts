import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Artist } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    user: string;
    artist: Artist[];
    constructor(private accountService: AccountService) {
        this.user = this.accountService.name;
    }

    ngOnInit() {
        this.accountService.listArtist(this.accountService.authorizationHeaderValue)
            .pipe(first())
            .subscribe(artists => this.artist = artists);
    }
}