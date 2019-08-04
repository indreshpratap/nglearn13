import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiClient } from 'src/app/providers/api.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/providers/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSignup = false;
  form: FormGroup;
  constructor(private api: ApiClient, private router: Router, private userSvc:UserService ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(),
      username: new FormControl(),
      password: new FormControl()
    })
  }

  processForm(ev) {
    if (this.isSignup) {
      this.register();
    } else {
      this.login();
    }
    console.log('login', ev);
  }

  signup() {
    this.isSignup = true;
  }

  register() {
    this.api.post('register', this.form.value).subscribe(res => {
      if (res.status) {
        alert('User registered');
        this.form.reset();
        this.isSignup = false;
      } else {
        alert('Failed to do registration');
      }
    }, (err) => {
      // console.log(err);
      alert(err.error.error);
    })
  }


  login() {
    let payload = {
      username: this.form.value.username,
      password: this.form.value.password
    };
    this.api.post('login', payload).subscribe(res => {
      if (res.status) {
        this.userSvc.setUserInfo(res.data);
        if (res.data.role === 'admin') {
          this.router.navigateByUrl('/admin/products');
        } else {
          this.router.navigateByUrl('/');
        }
      }
    }, (err) => {
      alert(err.error.error);
    })
  }

}
