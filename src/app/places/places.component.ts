import { cfg } from './../config';
import { Component, OnInit } from '@angular/core';
import { PlaceService, LocationService } from '../_services';
import { faTrash, faEdit, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  places: any;
  locations: any;
  states: any;
  faTrash = faTrash;
  faEdit = faEdit;
  faPlusCircle = faPlusCircle;
  modplace: any;
  placeForm: FormGroup;

  constructor(private place: PlaceService, 
    private modalService: NgbModal, 
    private location: LocationService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.getPlaces();

    this.location.getLocations().then( data => {
      this.locations = data['items'];
    });

    this.states = cfg.states;

    this.placeForm = this.formBuilder.group({
      location_id: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      phone: '',
      website: ''
    });
  }

  getPlaces() {
    this.place.getPlaces().then( data => this.places = data['items'] );
  }

  delete(id) {
    this.place.deletePlace(id).then( data => {
      console.log(data);
      this.getPlaces();
    });
  }

  open(content, item) {
    if (item != null) {
      this.modplace = item;
    }
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {});
  }

  onSubmit() {
    var form = this.placeForm.value;
    console.log(form);
    this.place.addPlace(form).then( data => {
      if (data['success']) {
        this.modalService.dismissAll();
        this.getPlaces();
      } else {
        console.log("no", data);
      }
    });
  }

  onUpdate(id) {
    var form = this.placeForm.value;
    for(var prop in form) {
      if (form.hasOwnProperty(prop) && !form[prop]) {
        delete form[prop]
      }
    }
    this.place.updatePlace(form, id).then( data => {
      if (data['success']) {
        this.modalService.dismissAll();
        this.getPlaces();
      } else {
        console.log("no", data);
      }
    });
  }

}
