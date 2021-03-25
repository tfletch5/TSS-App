import { LocationService } from '../_services';
import { Component, OnInit } from '@angular/core';
import { faTrash, faEdit, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: any;
  faTrash = faTrash;
  faEdit = faEdit;
  faPlusCircle =faPlusCircle;
  modloc: any;
  locationForm: FormGroup;
  URL = 'http://localhost:3100/upload';
  public uploader: FileUploader = new FileUploader({url: this.URL, itemAlias: 'photo'});

  constructor(private location: LocationService, private modalService: NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getLocations();

    this.locationForm = this.formBuilder.group({
      name: ['', Validators.required],
      logo: ''
    })
  }

  getLocations() {
    this.location.getLocations().then( data => this.locations = data['items'] );
  }

  delete(id) {
    this.location.deleteLocation(id).then( data => {
      console.log(data);
      this.getLocations();
    });
  }

  open(content, item) {
    if (item != null) {
      this.modloc = item;
    }
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {});
  }

  onSubmit() {
    var form = this.locationForm.value;
    console.log(form);
    this.location.addLocation(form).then( data => {
      if (data['success']) {
        this.modalService.dismissAll();
        this.getLocations();
      } else {
        console.log("no", data);
      }
    });
  }

  onUpdate(id) {
    var form = this.locationForm.value;
    for(var prop in form) {
      if (form.hasOwnProperty(prop) && !form[prop]) {
        delete form[prop]
      }
    }
    this.location.updateLocation(form, id).then( data => {
      if (data['success']) {
        this.modalService.dismissAll();
        this.getLocations();
      } else {
        console.log("no", data);
      }
    });
  }

}
