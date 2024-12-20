import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-dialod-add-user',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, FormsModule], 
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialod-add-user.component.html',
  styleUrl: './dialod-add-user.component.scss'
})
export class DialodAddUserComponent {
  user = new User();
  birthDate: Date | any;
  
  constructor() { }
  

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
  }

}
