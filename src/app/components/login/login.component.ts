import { Component } from '@angular/core';
import { userService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink,RouterOutlet], 

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  username : string = '';
  password : string = '';

  constructor(private userService: userService){}

  userLogin(): void{
    this.userService.userLogin({username:this.username, password:this.password}).subscribe({
      next:(response) =>{
        console.log(response);
        alert("Sesion iniciada")
        this.username = '';
        this.password = '';
      },
      error:(response) =>{
        alert('La contraseña o el username son incorrectos')
      }
    })
  }

}