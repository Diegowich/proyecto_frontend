import { Component } from '@angular/core';
import { userService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-user',
  imports: [FormsModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {

  username : string = '';
  password : string = '';
  client : string = '';

  constructor(private userService: userService){}

  register(): void{
    this.userService.createUser({username:this.username, password:this.password,client:this.client}).subscribe({
      next:(response) =>{
        console.log(response);
        Swal.fire({
          title: "!Pedido creado con exito!",
          icon: "success",
          draggable: false
        });

        this.username = '';
        this.password = '';
        this.client = '';
      },
      error:(response) =>{
        Swal.fire({
          title: "Error",
          icon: "error"
        });
      }
    })
  }
}