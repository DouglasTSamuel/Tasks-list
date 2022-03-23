import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  constructor(
    private router:Router
    ) {}

  ngOnInit(): void {}

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }
}
