import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user.class';
import { DatePipe, NgIf } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-edit-details',
  standalone: true,
  imports: [MatInputModule,MatDatepickerModule,MatButtonModule,MatFormFieldModule,MatIconModule,FormsModule, MatDialogModule, NgIf, MatProgressBar, MatDatepickerModule, MatDatepicker, DatePipe],
  templateUrl: './dialog-edit-details.component.html',
  styleUrl: './dialog-edit-details.component.scss'
})
export class DialogEditDetailsComponent {
  loading = false;
  user: User = new User();
  userId: string = '';

  constructor(public dialogRef: MatDialogRef<DialogEditDetailsComponent>){

  }

  saveUser(){}

}
