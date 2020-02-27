import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faCalendar, faEdit } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { cfg } from '../config';
import { UserService, SurveyService, MemberService, MembershipService, AuthenticationService } from '../_services';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user: any;
  states: any;
  survey: any;
  member: any;
  memberships: any;
  thismembership: any;
  uevents: any;
  modevent: any;
  modmem: any;
  surveyForm: FormGroup;
  addressForm: FormGroup;
  faCalendar = faCalendar;
  faEdit = faEdit;
  userlevel: any;
  authenticated: any;
  img_path = cfg.img_path;
  handler: any;

  constructor(
    private formBuilder: FormBuilder, 
    private modalService: NgbModal,
    private userservice: UserService,
    private surveyservice: SurveyService,
    private memberservice: MemberService,
    private membership: MembershipService,
    private auth: AuthenticationService,
    private toastr: ToastrService,
  ) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    if ( this.user['userlevel'] == 'admin' ) this.auth.setAdminState(true);

    var csurvey = JSON.parse(localStorage.getItem('survey'));
    if (csurvey) this.survey = csurvey; else this.getSurvey();

    var cmember = JSON.parse(localStorage.getItem('member'));
    if (cmember) this.member = cmember; else this.getMember();

    this.states = cfg.states;
    this.getEvents();
    this.configHandler();

    this.membership.getMemberships().then( data => this.memberships = data['items'] );
    this.addressForm = this.formBuilder.group({ address: '', city: '', state: '', zip: '', email: '', phone: '', birthday: '' });
    this.surveyForm = this.formBuilder.group({ ethnicity: '', gender: '', income: '', employment: '', birthday: '', sports: '', travel: '', fashion: '', technology: '', arts: '', fitness: '', food: '', interest: '', listen: '' });
  }

  getUser() {
    this.userservice.getUser(this.user.id).then( data => {
      if ( data['success'] ) {
        localStorage.setItem('user', JSON.stringify(data['data']));
        this.user = data['data'];
      }
    }).catch( e => console.log(e.error));
  }

  getSurvey() {
    this.surveyservice.getSurvey(this.user.id).then( data => {
      if ( data['success'] ) {
        localStorage.setItem('survey', JSON.stringify(data['data']));
        this.survey = data['data'];
      }
    }).catch( e => console.log(e.error));
  }

  getMember() {
    this.memberservice.getMember(this.user.id).then( data => {
      if ( data['success'] ) {
        localStorage.setItem('member', JSON.stringify(data['data']));
        this.member = data['data'];
      }
    }).catch( e => console.log(e.error));
  }

  getEvents() {
    this.userservice.getEventsByUser(this.user.id).then( data => {
      console.log("Events: ", data);
      if ( data['success'] ) {
        localStorage.setItem('uevents', JSON.stringify(data['data']));
        this.uevents = data['data'];
      }
    }).catch( e => console.log(e.error));
  }

  open(content, item, type) {
    if (item != null) {
      if ( type == 'event' ) this.modevent = item;
      if ( type == 'membership' ) this.modmem = item;
    }
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {});
  }

  onUpdateSurvey() {
    var form = this.surveyForm.value;
    for(var prop in form) {
      if (form.hasOwnProperty(prop) && !form[prop]) {
        delete form[prop]
      }
    }
    
    this.surveyservice.updateSurvey(form, this.user.id).then( data => {
      if ( data['success'] ) {
        this.modalService.dismissAll();
        this.getSurvey();
        this.showSuccess(data['message'], "Survey Update.");
      } else {
        this.showFailure(data['message'], "Survey Update Failed.");
      }
    }).catch( e => console.log(e.error));
  }

  onUpdateUser(id) {
    var form = this.addressForm.value;
    for(var prop in form) {
      if (form.hasOwnProperty(prop) && !form[prop]) {
        delete form[prop]
      }
    }
    if (form['birthday']) form.birthday = cfg.dateConverter(form.birthday);
    this.userservice.updateUser(form, id).then( data => {
      if (data['success']) {
        localStorage.setItem('user', JSON.stringify(data['data']));
        this.user = data['data'];
        this.modalService.dismissAll();
        this.getUser();
        this.showSuccess(data['message'], "Account Update");
      } else {
        this.showFailure(data['message'], "Account Update Failure.");
      }
    })
    .catch(e => console.log(e.error));
  }

  private configHandler() {
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: 'https://thesecretsociety.us/assets/imgs/SECRET_SOCIETY_MAIN.jpg',
      locale: 'auto',
      source: source => {
        console.log("Source: ", source);
        const src = {
          customer_id: this.user.customer_id,
          source_id: source.id,
          subscription_id: this.member.subscription_id,
          plan_id: this.thismembership.plan_id,
        }

        this.userservice.attachSource(src).then( data => {
          if (data['success']) {
            const membership = {
              user_id: this.user.id,
              membership_id: this.thismembership.id
            }
            this.memberservice.updateMember(membership).then( data => {
              if (data['success']) {
                this.getMember();
                this.modalService.dismissAll();
                this.showSuccess(data['message'], "Membership Updated.");
              } else {
                this.showFailure(data['message'], "Membership Update Failed.");
              }
            })
          } else {
            this.showFailure(data['message'], "Membership Update Failed.");
          }
        })
      }
    })
  }

  openHandler(membership) {
    this.thismembership = membership;
    this.handler.open({
      name: membership.name,
      description: `Subscribing to membership: ${membership.name}`,
      amount: membership.cost * 100
    })
  }

  showSuccess(msg, title) {
    this.toastr.success(msg, title);
  }

  showFailure(msg, title) {
    this.toastr.error(msg, title);
  }

}
