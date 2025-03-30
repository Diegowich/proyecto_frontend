import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userService } from '../../services/user.service';

@Component({
  selector: 'app-list-users',
  imports: [CommonModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit{

  /**
   *
   */
  users : any[] = [];

  constructor(private userService: userService) {}

  ngOnInit(): void {
      this.userService.getAllUsers().subscribe(
        (response)=>{
        this.users = response.users; 
   })
 }
}