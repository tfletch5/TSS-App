import { Component, OnInit } from '@angular/core';
import { MemberService } from '../_services';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: any;
  faTrash = faTrash;
  faEdit = faEdit;
  modmem: any;

  constructor(private member: MemberService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.member.getMembers().then( data => this.members = data['items'] );
  }

  delete(id) {
    this.member.deleteMember(id).then( data => {
      console.log(data);
      this.getMembers();
    });
  }

  open(content, item) {
    this.modmem = item;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {});
  }

}
