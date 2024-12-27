import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialodAddUserComponent } from '../dialod-add-user/dialod-add-user.component';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  imports: [MatButtonModule, MatCardModule, MatIcon, MatTooltipModule, NgFor],
})
export class UserComponent implements OnInit {
  users: any[] = []; // Array to hold the users

  constructor(public dialog: MatDialog, private firestore: Firestore) {}

  ngOnInit() {
    this.loadUsers();  // Call the function to load users from Firestore
  }

  // Asynchronous function to load users from Firestore
  async loadUsers() {
    const usersCollection = collection(this.firestore, 'users');
    const userSnapshot = await getDocs(usersCollection);
    this.users = userSnapshot.docs.map(doc => doc.data());
    console.log(this.users);  // To check the fetched data
  }

  openDialog() {
    this.dialog.open(DialodAddUserComponent);
  }
}
