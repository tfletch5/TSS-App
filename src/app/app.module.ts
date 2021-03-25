import { AngularEditorModule } from '@kolkov/angular-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FileUploadModule } from 'ng2-file-upload';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxEditorModule } from 'ngx-editor';
import { NgxStripeModule } from 'ngx-stripe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AuthenticationService, AmbassadorService, AttendeeService, EventService, LocationService, MemberService, MembershipService, PlaceService, SurveyService, UserService } from './_services';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { AboutComponent } from './about/about.component';
import { AmbassadorsComponent } from './ambassadors/ambassadors.component';
import { AppComponent } from './app.component';
import { AttendeesComponent } from './attendees/attendees.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events/events.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HowComponent } from './how/how.component';
import { LocationsComponent } from './locations/locations.component';
import { MembersComponent } from './members/members.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { PlacesComponent } from './places/places.component';
import { Routing } from './app.routing.module';
import { SurveysComponent } from './surveys/surveys.component';
import { UsersComponent } from './users/users.component';
import { VieweventsComponent } from './viewevents/viewevents.component';

@NgModule({
  declarations: [
    AboutComponent,
    AmbassadorsComponent,
    AppComponent,
    AttendeesComponent,
    DashboardComponent,
    EventsComponent,
    HeaderComponent,
    HomeComponent,
    HowComponent,
    LocationsComponent,
    MembersComponent,
    MembershipsComponent,
    PlacesComponent,
    SurveysComponent,
    UsersComponent,
    VieweventsComponent
  ],
  imports: [
    AngularEditorModule,
    BrowserAnimationsModule, // required animations module
    BrowserModule,
    FileUploadModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxDatatableModule,
    NgxEditorModule,
    NgxStripeModule.forRoot('sk_live_ZmZLzymNNX8wJCzoc4MbWKTi00F3qzMsuW'),
    ReactiveFormsModule,
    Routing,
    ToastrModule.forRoot(),
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    AmbassadorService, 
    AttendeeService, 
    EventService, 
    LocationService, 
    MemberService, 
    MembershipService, 
    PlaceService, 
    SurveyService, 
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
