import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header={
    heading: "A FREE AND SIMPLE LANDING PAGE",
    headingtext:"Namari is a free landing page template you can use for your projects. It is free to use for your    personal and commercial projects, enjoy!",
    buttontext: "START CREATING TODAY",
    buttonkink: "\Home"
  }
  constructor() { }

  ngOnInit() {
  }

}
