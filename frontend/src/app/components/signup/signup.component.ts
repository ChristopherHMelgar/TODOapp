import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { User } from "../../models/user";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signUp() {
    this.authService.signUp(this.user).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/tasks']);
      },
      err => {
        console.log(err);
      }
    )
  }
}
