import { Component, OnInit } from '@angular/core';
import { EventService, LocationService, UserService, AttendeeService } from '../_services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { cfg } from '../config';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-viewevents',
  templateUrl: './viewevents.component.html',
  styleUrls: ['./viewevents.component.css']
})
export class VieweventsComponent implements OnInit {
  events: any = [];
  firstevent = true;
  handler: any;
  img_path = cfg.img_path;
  membership: any
  payment = false;
  thisevent: any;
  user: any;
  viewevent: any;

  constructor(
    private attendService: AttendeeService,
    private event: EventService, 
    private location: LocationService, 
    private modalService: NgbModal, 
    private userService: UserService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.getEvents();
    this.firstEvent();
    this.getMembership();
    this.configHandler();
  }

  private configHandler() {
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: 'https://thesecretsociety.us/assets/imgs/SECRET_SOCIETY_MAIN.jpg',
      locale: 'auto',
      token: token => {
        var payment = {
          amount: `${this.thisevent.cost}00`,
          currency: 'usd',
          description: `Purchasing ticket for ${this.thisevent.name}`,
          receipt_email: this.user.email,
          source: token.id
        }
        this.event.purchaseEvent(payment).then( data => {
          
          if (data['success']) {
            var results = data['data'];
            var transaction = {
              charge_id: results.id,
              customer_id: this.user.customer_id,
              amount: results.amount,
              amount_refunded: results.amount_refunded,
              balance_trans: results.balance_transaction,
              captured: results.captured,
              currency: results.currency,
              description: results.description,
              failure_code: results.failure_code,
              failure_message: results.failure_message,
              paid: results.paid,
              refunded: results.refunded,
              refund_url: results.refunds.url,
              source_id: results.source.id,
              last4: results.source.last4,
              status: results.status
            }
            
            this.event.saveTransaction(transaction).then( data => {
              this.rsvp({ id: this.thisevent.id });
              this.getEvents();
              this.modalService.dismissAll();
              this.showSuccess(data['message']);
            });
          } else {
            this.showFailure(data['message']);
          }
        });
      }
    })
  }

  openHandler(event) {
    this.thisevent = event;
    this.handler.open({
      name: event.name,
      description: `Purchasing ticket for ${event.name}`,
      amount: `${event.cost}00`
    })
  }

  getEvents() {
    this.location.getEventsByLocation(this.user.location, this.user.id).then( data => {
      this.events = data['items'];
    });
  }

  firstEvent() {
    this.userService.getEventsByUser(this.user.id).then( data => {
      if ( data['success'] ) {
        this.firstevent = false;
      }
    }).catch( e => console.log(e.error));
  }

  getMembership() {
    this.userService.getMembership(this.user.id).then( data => {
      var member = data['data'];
      this.membership = member.membership_id;
    })
  }

  rsvp(event) {
    var attend = {
      event_id: event.id,
      user_id: this.user.id
    }
    this.attendService.addAttendee(attend).then( data => {
      if (data['success']) {
        this.firstEvent();
        this.getEvents();
        this.modalService.dismissAll();
        this.showSuccess(data['message']);
      } else {
        this.showFailure(data['message']);
      }
    })
  }

  purchase(event) {
    this.payment = true;
  }

  open(content, item) {
    this.viewevent = item
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {});
  }

  showSuccess(message) {
    this.toastr.success(message);
  }

  showFailure(message) {
    this.toastr.error(message);
  }

}
