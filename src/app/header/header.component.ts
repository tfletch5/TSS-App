import { Component } from '@angular/core';
import { faHome, faCog, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from '../_services';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    private auth: AuthenticationService;
    isAuthenticated: boolean;
    isAdmin: boolean;
    faHome = faHome;
    faCog = faCog;
    faGraduationCap = faGraduationCap;
    title = 'TSS';

    constructor( auth: AuthenticationService ) {
        this.auth = auth;
        auth.loggedIn$.subscribe( status => {
            this.isAuthenticated = status;
        });
        auth.admin$.subscribe( status => {
            this.isAdmin = status;
        })
    }

    logout() {
        this.auth.logout();
    }
}