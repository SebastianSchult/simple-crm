import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialodAddUserComponent } from '../dialod-add-user/dialod-add-user.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  imports: [MatButtonModule, MatIcon, MatTooltipModule]
})

export class UserComponent {

  constructor(public dialog: MatDialog) {

   }


  openDialog() {
    this.dialog.open(DialodAddUserComponent);
  }

}
