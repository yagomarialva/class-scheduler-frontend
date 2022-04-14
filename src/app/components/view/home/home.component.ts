import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subscribe: boolean
  login: boolean
  users: User[] = [];

  user: User = {
    nickname: "",
    password: "",
    status: false
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.read().subscribe(users => {
      // this.pacients = pacients
      this.users = users;
      console.log(this.users);
    })
  }

  createUser(): void {
    this.userService.create(this.user).subscribe(() => {
      this.user.status = true;
      this.userService.showMessage('Usuário criado!')
      this.router.navigate(['/'])
      this.subscribe = false;
    })

  }

  loginUser(): void {
    this.userService.update(this.user).subscribe(() => {
      console.log(this.user)
      this.userService.showMessage('Bem vindo!')
      // this.router.navigate(['/classes'])
    })

  }

  singIn(){
    this.subscribe = true;
  }

  singUp(){
    this.login = true;
  }

  cancel(): void {
    this.subscribe = false;
    this.login = false;
    this.router.navigate(['/'])
  }



}
