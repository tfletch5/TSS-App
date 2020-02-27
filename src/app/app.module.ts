import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FileUploadModule } from 'ng2-file-upload';
import { Routing } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AuthenticationService, AmbassadorService, AttendeeService, EventService, LocationService, MemberService, MembershipService, PlaceService, SurveyService, UserService } from './_services';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationsComponent } from './locations/locations.component';
import { PlacesComponent } from './places/places.component';
import { AmbassadorsComponent } from './ambassadors/ambassadors.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { SurveysComponent } from './surveys/surveys.component';
import { UsersComponent } from './users/users.component';
import { MembersComponent } from './members/members.component';
import { AttendeesComponent } from './attendees/attendees.component';
import { AboutComponent } from './about/about.component';
import { HowComponent } from './how/how.component';
import { VieweventsComponent } from './viewevents/viewevents.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    EventsComponent,
    DashboardComponent,
    LocationsComponent,
    PlacesComponent,
    AmbassadorsComponent,
    MembershipsComponent,
    SurveysComponent,
    UsersComponent,
    MembersComponent,
    AttendeesComponent,
    AboutComponent,
    HowComponent,
    VieweventsComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FontAwesomeModule,
    ReactiveFormsModule,
    FileUploadModule,
    FormsModule,
    Routing,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    AngularEditorModule,
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
