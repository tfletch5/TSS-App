import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AmbassadorsComponent } from './ambassadors/ambassadors.component';
// import { AttendeesComponent } from './attendees/attendees.component';
import { EventsComponent } from './events/events.component';
import { LocationsComponent } from './locations/locations.component';
import { MembersComponent } from './members/members.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { PlacesComponent } from './places/places.component';
import { SurveysComponent } from './surveys/surveys.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { HowComponent } from './how/how.component';
import { VieweventsComponent } from './viewevents/viewevents.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'ambassadors', component: AmbassadorsComponent, canActivate: [AuthGuard] },
    { path: 'events', component: EventsComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'locations', component: LocationsComponent, canActivate: [AuthGuard] },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
    { path: 'memberships', component: MembershipsComponent, canActivate: [AuthGuard] },
    { path: 'places', component: PlacesComponent, canActivate: [AuthGuard] },
    { path: 'surveys', component: SurveysComponent, canActivate: [AuthGuard] },
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
    { path: 'viewevents', component: VieweventsComponent, canActivate: [AuthGuard] },
    { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
    { path: 'how', component: HowComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes, { useHash: true, relativeLinkResolution: 'legacy' });
