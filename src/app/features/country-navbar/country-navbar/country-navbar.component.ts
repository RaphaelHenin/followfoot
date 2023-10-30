import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-navbar',
  templateUrl: './country-navbar.component.html',
  styleUrls: ['./country-navbar.component.css'],
})
export class CountryNavbarComponent implements OnInit {
  @Input()
  public countries: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
