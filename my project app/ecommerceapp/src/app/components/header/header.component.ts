import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user$: Observable<firebase.User>;

  constructor(private auth: AuthService, private router: Router) { 
    this.user$ = this.auth.user$;
  }

  ngOnInit() {
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
