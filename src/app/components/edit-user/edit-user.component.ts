import { Component } from '@angular/core';
import { userService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({

  selector: 'app-edit-user',
  imports: [FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {

  username : string = '';
  password : string = '';

  constructor(private userService: userService){}

  editUser(): void{
    this.userService.editUser({username:this.username, password:this.password}).subscribe({
      next:(response) =>{
        console.log(response);
        Swal.fire({
          title: "¿Quieres actualizar el estado de este pedido?",
          showDenyButton: true,
          confirmButtonText: "Actualizar",
          denyButtonText: `No actualizar`
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("El estado de este pedido ha sido actualizado");
          } else if (result.isDenied) {
            Swal.fire("El estado de tu pedido sigue como antes");
          }
        });
        this.username = '';
        this.password = '';
      },
      error:(response) =>{
        console.log(response)
        Swal.fire({
          title: "Ha ocurrido un error",
          icon: "error"
        })
       
      }
    })
  }
}