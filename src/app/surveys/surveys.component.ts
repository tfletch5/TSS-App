import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { SurveyService } from '../_services';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {
  surveys: any;
  modsurvey: any;
  faTrash = faTrash;
  faEdit = faEdit;

  constructor(private survey: SurveyService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getSurveys();
  }

  getSurveys() {
    this.survey.getSurveys().then( data => this.surveys = data['items'] );
  }

  delete(id) {
    this.survey.deleteSurvey(id).then( data => {
      console.log(data);
      this.getSurveys();
    });
  }

  open(content, user) {
    this.modsurvey = user;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {});
  }

}
