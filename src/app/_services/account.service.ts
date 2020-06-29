import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserManager, UserManagerSettings, User } from 'oidc-client';
import { BehaviorSubject, Observable } from 'rxjs'; 
import { AppUser, Artist } from '@app/_models'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService  {

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private manager = new UserManager(getClientSettings());
  private user: User | null;

  constructor(private http: HttpClient) { 
    
    this.manager.getUser().then(user => { 
      this.user = user;      
      this._authNavStatusSource.next(this.isAuthenticated());
    });
  }

  login() { 
    return this.manager.signinRedirect();   
  }

  async completeAuthentication() {
      this.user = await this.manager.signinRedirectCallback();
      this._authNavStatusSource.next(this.isAuthenticated());      
  }  

  register(userRegistration: any) {    
    return this.http.post(environment.authApiURI + '/account', userRegistration);
  }

  list(token: string) : Observable<AppUser[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })
    };

    return this.http.get<AppUser[]>(environment.authApiURI + '/account/list', httpOptions);
    
  }

  listArtist(token: string) : Observable<Artist[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token,
      })
    };

    return this.http.get<Artist[]>(environment.resourceApiURI + '/artists', httpOptions);
    
  }

  isAuthenticated(): boolean {
    return this.user != null && !this.user.expired;
  }

  get authorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  get name(): string {
    return this.user != null ? this.user.profile.name : '';
  }

  get profile(): User {
    return this.user;
  }

  async signout() {
    await this.manager.signoutRedirect();
  }
}

export function getClientSettings(): UserManagerSettings {
  return {
      authority: environment.authority,
      client_id: 'angular_spa',
      redirect_uri: environment.client + 'auth-callback',
      post_logout_redirect_uri: environment.client,
      response_type:"id_token token",
      scope:"openid profile email api.read",
      filterProtocolClaims: true,
      loadUserInfo: true,
      automaticSilentRenew: true,
      silent_redirect_uri: environment.client + 'silent-refresh.html'
  };
}
