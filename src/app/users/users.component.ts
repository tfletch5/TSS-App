import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;
  faTrash = faTrash;
  faEdit = faEdit;
  moduser: any;

  constructor(private user: UserService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.user.getUsers().then( data => this.users = data['items'] );
  }

  edit(user) {
    
  }

  delete(id) {
    this.user.deleteUser(id).then( data => {
      console.log(data);
      this.getUsers();
    });
  }

  open(content, user) {
    this.moduser = user;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {});
  }

}
