import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
} from '@angular/fire/firestore';
import { AsyncPipe } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dialod-add-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    AsyncPipe,
    MatProgressBarModule,
    CommonModule,
    NgIf,
    MatCardModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialod-add-user.component.html',
  styleUrl: './dialod-add-user.component.scss',
})
export class DialodAddUserComponent {
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  user = new User();
  birthDate: Date | any;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialodAddUserComponent>) {
    const aCollection = collection(this.firestore, 'items');
    this.items$ = collectionData(aCollection);
  }

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
    this.loading = true;

    try {
      const usersCollection = collection(this.firestore, 'users');
      const result = await addDoc(usersCollection, { ...this.user });
      console.log('User successfully saved:', result);
      this.loading = false;
      this.dialogRef.close();
    } catch (error) {
      console.error('Error saving user:', error);
      this.loading = false;
    }
  }
}
