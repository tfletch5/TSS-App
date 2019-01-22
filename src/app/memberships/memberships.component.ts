import { Component, OnInit } from '@angular/core';
import { MembershipService } from '../_services';
import { faTrash, faEdit, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-memberships',
  templateUrl: './memberships.component.html',
  styleUrls: ['./memberships.component.css']
})
export class MembershipsComponent implements OnInit {
  memberships: any;
  faTrash = faTrash;
  faEdit = faEdit;
  modmem: any;
  faPlusCircle = faPlusCircle;
  membershipForm: FormGroup;
  frequencies = [
    { id: 'month',  name: 'monthly' },
    { id: 'year', name: 'annually' }
  ];

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
    private membership: MembershipService, 
    private modalService: NgbModal, 
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getMemberships();

    this.membershipForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      cost: ['', Validators.required],
      frequency: ['', Validators.required],
      cost_per_event: ['', Validators.required],
    });
  }

  getMemberships() {
    this.membership.getMemberships().then( data => this.memberships = data['items'] );
    console.log(this.memberships);
  }

  delete(id, product, plan) {
    this.membership.deleteMembership(id, product, plan).then( data => {
      if (data['success']) {
        this.showSuccess(data['message'], "Delete Membership");
        this.getMemberships();
      } else {
        this.showFailure(data['message'], "Delete Membership");
      }
    });
  }

  open(content, item) {
    if ( item != null) {
      this.modmem = item;
    }
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {});
  }

  onSubmit() {
    var form = this.membershipForm.value;
    console.log(form);
    this.membership.addMembership(form).then( data => {
      if (data['success']) {
        this.modalService.dismissAll();
        this.getMemberships();
      } else {
        console.log("Create Membership", data);
      }
    });
  }

  onUpdate(id) {
    var form = this.membershipForm.value;
    for(var prop in form) {
      if (form.hasOwnProperty(prop) && !form[prop]) {
        delete form[prop]
      }
    }
    this.membership.updateMembership(form, id).then( data => {
      if (data['success']) {
        this.modalService.dismissAll();
        this.getMemberships();
      } else {
        console.log("no", data);
      }
    });
  }

  showSuccess(msg, title) {
    this.toastr.success(msg, title);
  }

  showFailure(msg, title) {
    this.toastr.error(msg, title);
  }

}
