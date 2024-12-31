import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialodAddUserComponent } from '../dialod-add-user/dialod-add-user.component';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, NgFor } from '@angular/common';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  imports: [MatButtonModule, MatCardModule, MatIcon, MatTooltipModule, NgFor, CommonModule, RouterModule],
})
export class UserComponent {
  user = new User();
  users$: Observable<any[]> = new Observable();

  constructor(public dialog: MatDialog, private firestore: Firestore) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    const userCollection = collection(this.firestore, 'users');
    
    this.users$ = collectionData(userCollection, { idField: 'id' });


    this.users$.subscribe((users) => {
      console.log('Aktualisierte Benutzerdaten:', users);
    });
  }

  openDialog() {
    this.dialog.open(DialodAddUserComponent);
  }
}
