import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service/user-service.service';
import { CreateUserComponent } from '../modals/create-user/create-user.component';

@Component({
  selector: 'app-users-area',
  templateUrl: './users-area.component.html',
  styleUrls: ['./users-area.component.scss']
})

export class UsersAreaComponent implements OnInit, OnDestroy {
  users: User[];
  createUser: User;
  usersCount: number;
  subscription: Subscription;
  constructor(private userService: UserServiceService, private dialog: MatDialog) { }

  ngOnInit(): void {
   this.userService.fetchUsers();
    this.subscription = this.userService.getUsers().subscribe(
      data =>{
        this.users = data;
        this.usersCount = this.users.length;
      }
    )
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '250px',
      data: this.createUser,
      panelClass: 'custom-modalbox'

    });

    dialogRef.afterClosed().subscribe(result => {
      this.createUser = result;
      if(this.createUser){
        this.users = [...this.users, this.createUser];
        this.usersCount = this.users.length;
      }
    });
  }
  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }

}

