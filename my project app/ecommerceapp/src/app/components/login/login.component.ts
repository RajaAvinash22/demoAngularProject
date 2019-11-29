import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {};
  errorMessage = "";
  successMessage = "";
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login(loginForm){
    let user = loginForm.value;
    let response = this.userService.login(user);
    response.then((result) => {
      if(result.user){
        this.successMessage = "You have logged in successfully.";
        loginForm.resetForm();
        this.router.navigate(['/']);
      }else if(result.code){
        this.errorMessage = result.message;
      }
    });

  }

}
