import { Component, OnInit } from '@angular/core';
import { EventService, LocationService } from '../_services';
import { faTrash, faEdit, faPlusCircle, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ToastrService } from 'ngx-toastr';
import { cfg } from '../config';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any;
  faTrash = faTrash;
  faEdit = faEdit;
  faPlusCircle = faPlusCircle;
  faCalendar = faCalendar;
  modevent: any;
  eventForm: FormGroup;
  locations: any;
  places: any;
  model;
  time = {hour: 13, minute: 30};
  meridian = true;
  public uploader: FileUploader;
  photo_uid: any;
  previewflyer: any;
  user: any;
  img_path = cfg.img_path;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '25rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    uploadUrl: 'v1/images', // if needed
    customClasses: [ // optional
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  constructor(
    private event: EventService, 
    private modalService: NgbModal, 
    private formBuilder: FormBuilder, 
    private location: LocationService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    var token = localStorage.getItem('token');
    this.uploader = new FileUploader({url: `${cfg.apiUrl}/upload?token=${token}`, itemAlias: 'photo'});
    this.getEvents();

    this.location.getLocations().then( data => {
      this.locations = data['items'];
    });

    this.eventForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: '',
      event_date: ['', Validators.required],
      start_time: ['', Validators.required],
      end_time: ['', Validators.required],
      event_flyer: '',
      place_id: ['', Validators.required],
      cost: ['', Validators.required],
      location_id: ['', Validators.required]
    });

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      var results = JSON.parse(response);  
      if (results.success) {
        this.photo_uid = results.data.uid;
        this.previewflyer = this.img_path + results.data.url;
        console.log("%c Photo UID: " + this.previewflyer, "color: blue");      
      }
    };
  }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  getEvents() {
      this.event.getEvents().then( data => {
        console.log(data['items'])
        this.events = data['items'] 
      });
  }

  delete(id) {
    this.event.deleteEvent(id).then( data => {
      console.log(data);
      this.getEvents();
    });
  }

  open(content, item) {
    if (item != null) {
      this.modevent = item;
    }
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {});
  }

  onSubmit() {
    var form = this.eventForm.value;
    form.event_date = cfg.dateConverter(form.event_date);
    form.start_time = cfg.timeConverter(form.start_time);
    form.end_time = cfg.timeConverter(form.end_time);
    form.event_flyer = this.photo_uid;
    
    this.event.addEvent(form).then( data => {
      if (data['success']) {
        this.modalService.dismissAll();
        this.showSuccess(data['message'], "Create Event");
        this.getEvents();
      } else {
        this.showFailure(data['message'], "Create Event");
      }
    });
  }

  onUpdate(id) {
    var form = this.eventForm.value;
    form.event_flyer = this.photo_uid;
    for(var prop in form) {
      if (form.hasOwnProperty(prop) && !form[prop]) {
        delete form[prop]
      }
    }
    if ( form.event_date ) form.event_date = cfg.dateConverter(form.event_date);
    if ( form.start_time ) form.start_time = cfg.timeConverter(form.start_time);
    if ( form.end_time ) form.end_time = cfg.timeConverter(form.end_time);
    this.event.updateEvent(form, id).then( data => {
      if (data['success']) {
        this.modalService.dismissAll();
        this.showSuccess(data['message'], "Update Event");
        this.getEvents();
      } else {
        this.showFailure(data['message'], "Update Event");
      }
    });
  }

  getPlacesByLocation(id) {
    this.location.getPlacesByLocation(id).then( places => this.places = places['data'])
  }

  showSuccess(msg, title) {
    this.toastr.success(msg, title);
  }

  showFailure(msg, title) {
    this.toastr.error(msg, title);
  }

}
