import { Component } from '@angular/core';
import { userService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-delete',
  imports: [FormsModule, CommonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {

    username : string = '';
    password : string = '';
  
    constructor(private userService: userService){}
  
    deleteUser(): void{
      this.userService.deleteUser(this.username).subscribe({
        next:(response) =>{
          console.log(response);
          Swal.fire({
            title: "¿Quieres borrar este pedido?",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonText: "Borrar pedido",
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire({
                icon: "success",
                title: "Pedido borrado con exito",
              });
            }
          });
          this.username = '';
          this.password = '';
        },
        error:(response) =>{
          console.log(response)
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo ha salido mal",
          });
        }
      })
    }
}