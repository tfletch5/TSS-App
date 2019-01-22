import { AmbassadorService } from '../_services';
import { Component, OnInit } from '@angular/core';
import { faTrash, faEdit, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ambassadors',
  templateUrl: './ambassadors.component.html',
  styleUrls: ['./ambassadors.component.css']
})
export class AmbassadorsComponent implements OnInit {
  ambassadors: any;
  faTrash = faTrash;
  faEdit = faEdit;
  faPlusCircle = faPlusCircle;
  modamb: any;
  ambassadorForm: FormGroup;

  constructor(
    private ambassador: AmbassadorService, 
    private modalService: NgbModal, 
    private formBuilder: FormBuilder 
  ) { }

  ngOnInit() {
    this.getAmbassadors();

    this.ambassadorForm = this.formBuilder.group({
      first: ['', Validators.required],
      last: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  getAmbassadors() {
    this.ambassador.getAmbassadors().then( data => this.ambassadors = data['items'] );
  }

  delete(id) {
    this.ambassador.deleteAmbassador(id).then( data => {
      console.log(data);
      this.getAmbassadors();
    });
  }

  open(content, item) {
    if (item != null) {
      this.modamb = item;
    }
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {});
  }

  onSubmit() {
    var form = this.ambassadorForm.value;
    console.log(form);
    this.ambassador.addAmbassador(form).then( data => {
      if (data['success']) {
        this.modalService.dismissAll();
        this.getAmbassadors();
      } else {
        console.log("no", data);
      }
    });
  }

  onUpdate(id) {
    var form = this.ambassadorForm.value;
    for(var prop in form) {
      if (form.hasOwnProperty(prop) && !form[prop]) {
        delete form[prop]
      }
    }
    this.ambassador.updateAmbassador(form, id).then( data => {
      if (data['success']) {
        this.modalService.dismissAll();
        this.getAmbassadors();
      } else {
        console.log("no", data);
      }
    });
  }

}
