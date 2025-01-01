import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import {
  Firestore,
  collection,
  doc,
  docData,
  onSnapshot,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../../models/user.class';
import { CommonModule, DatePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogEditDetailsComponent } from '../dialog-edit-details/dialog-edit-details.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, DatePipe, MatIcon, MatButtonModule, MatMenuModule, MatDialogModule, CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  route: ActivatedRoute = inject(ActivatedRoute); // Injiziere ActivatedRoute
  user: User = new User();
  userID = '';

  constructor(public dialog: MatDialog){}

  ngOnInit() {
    this.route.paramMap.subscribe((param) => {
      this.userID = param.get('id') || '';
      console.log('GOT IT', this.userID);
      this.getUser();
    });
  }

  getUser() {
    const userDoc = doc(this.firestore, `users/${this.userID}`);
    docData(userDoc).subscribe((user: any) => {
      if (user) {
        this.user = new User(user);

        // Firestore-Timestamp in Date umwandeln
        if (user.birthDate && user.birthDate.toDate) {
          this.user.birthDate = user.birthDate.toDate();
        } else if (user.birthDate && user.birthDate.seconds) {
          this.user.birthDate = new Date(user.birthDate.seconds * 1000);
        } else if (typeof user.birthDate === 'number') {
          this.user.birthDate = new Date(user.birthDate);
        }

        console.log('Benutzerdaten:', this.user);
      }
    });
  }

  openDetailsDialog() {}

  editDetails() {
    const dialog = this.dialog.open(DialogEditDetailsComponent)
    dialog.componentInstance.user= this.user;
  }

  editUser() {
    this.dialog.open(DialogEditUserComponent)

  }
}
