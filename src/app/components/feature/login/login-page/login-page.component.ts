import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  showPass: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

  tooglePassword():string{
    this.showPass = !this.showPass
    return this.showPass ? 'text' : 'password'
  }
}
