import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from 'src/app/components/users-area/user-card/user-card.component';
import { UsersAreaFilterComponent } from 'src/app/components/users-area/users-area-filter/users-area-filter.component';
import { CreateUserComponent } from 'src/app/components/modals/create-user/create-user.component';
import { UsersAreaComponent } from 'src/app/components/users-area/users-area.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserCardComponent,
    UsersAreaFilterComponent,
    CreateUserComponent,
    UsersAreaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserAreaModule { }
