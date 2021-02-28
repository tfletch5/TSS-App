import { Component, OnInit } from '@angular/core';
import { UserService, AuthenticationService } from '../_services';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faArrowCircleRight = faArrowCircleRight;
  foundCode: any;
  showCode = true;
  showLogin = false;
  showSignup = false;
  loginType = "Member Login";
  locations: any;
  signupForm: FormGroup;
  loginForm: FormGroup;
 
  constructor(
    private user: UserService,
    private auth: AuthenticationService,
    private formBuilder: FormBuilder, 
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    if ( localStorage.getItem('loggedin') ) this.router.navigate(['/viewevents']);
    
    this.signupForm = this.formBuilder.group({
      code: '',
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      userlevel: '',
      location_id: ['', Validators.required],
      ambassador_id: ''
    });

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });

    this.user.getLocations().then( data => {
      this.locations = data['items'];
    });
  }
  
  toggleForm() {
    if ( this.showCode ) {
      this.showCode = false;
      this.showLogin = true;
      this.loginType = "Enter Code";
    } else {
      this.showCode = true;
      this.showLogin = false;
      this.loginType = "Member Login";
    }
  }

  checkCode(code) {
    if (code) {
      this.user.checkCode(code).then( (data) => {
        if ( data['success'] ) {
          this.foundCode = data['data'];
        } else {
          this.foundCode = "";
        }
      });
    }
  }

  goCode() {
    this.showCode = false;
    this.showSignup = true;
  }

  register() {
    var form = this.signupForm.value;
    form.code = this.foundCode.code;
    form.ambassador_id = this.foundCode.id;
    form.userlevel = "user";
    this.auth.register(form).then( data => {
      if (data['success']) {
        this.router.navigate(['/viewevents']);
      } else {
        this.showFailure(data['message']);
      }
    }).catch( e => {
      this.showFailure(e.error['message']);
    });
  }

  /**
   * Login the user into app
   */
  login() {
    console.log("logging in");
    this.auth.login(this.loginForm.value).then( data => {
        if (data['success']) {
          this.router.navigate(['/viewevents']);
        } else {
          this.showFailure(data['message']);
        }
      })
      .catch( e => {
        this.showFailure(e.error['message']);
      });
  }

  showSuccess(message) {
    this.toastr.success(message);
  }

  showFailure(message) {
    this.toastr.error(message);
  }

}
