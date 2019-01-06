import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {MaterialService} from '../shared/classes/material.service';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements AfterViewInit {

  @ViewChild('floating') floatingRef: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    MaterialService.initializeFloatingButton(this.floatingRef);
  }

}
