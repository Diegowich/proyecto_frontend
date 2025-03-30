import { Component } from '@angular/core';
import { userService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-buscar-user',
  imports: [FormsModule, CommonModule],
  templateUrl: './buscar-user.component.html',
  styleUrl: './buscar-user.component.css'
})

export class BuscarUserComponent {

  username : string = '';
  user: any = {username:"", id:""};

  constructor(private userService: userService) {}

  findUser(): void{
    console.log(this.username)
    this.userService.findUser(this.username).subscribe({
      next:(response) =>{
        console.log(response);
        this.user.username = response.usuario; 
        this.user.id = response.id;
        this.username = '';
      },
      error:(response) =>{
        console.log(response)
        Swal.fire({
          icon: 'error',
          title: '¡Oops!',
          text: 'No se han encontrado usuarios',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Entendido'
        })
      }
    })
  }
}