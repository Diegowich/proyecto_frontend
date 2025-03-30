import { Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { BuscarUserComponent } from './components/buscar-user/buscar-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DeleteComponent } from './components/delete/delete.component';


export const routes: Routes = [{
    title:'Lista de usuarios',
    path: 'list-users',
    component: ListUsersComponent
},
{
    title:'Log In',
    path: 'log-in',
    component: LoginComponent
},
{
    title:'Register your account',
    path: 'registration',
    component: RegisterUserComponent
},
{
    title:'Find someone',
    path: 'search',
    component: BuscarUserComponent
},
{
    title: 'Update your personal information',
    path: 'update',
    component: EditUserComponent
},
{
    title: 'Delete your account',
    path:'delete',
    component: DeleteComponent
}
];