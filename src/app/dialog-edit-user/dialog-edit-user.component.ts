import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user.class';
import { DatePipe, NgIf } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { doc, Firestore, updateDoc, getDoc, Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    NgIf,
    MatProgressBar,
    MatDatepickerModule,
    MatDatepicker,
    DatePipe,
  ],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss',
})
export class DialogEditUserComponent {
  loading = false;
  user: User = new User();
  userId: string = '';
  birthDate: Date | null = null;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore: Firestore) {}

  // Methode zum Laden des Benutzers
  async loadUser() {
    if (!this.userId) {
      console.error('User ID fehlt. Laden nicht möglich.');
      return;
    }

    try {
      const userDocRef = doc(this.firestore, `users/${this.userId}`);
      const docSnap = await getDoc(userDocRef); // Snapshot des Benutzerdokuments abrufen

      if (docSnap.exists()) {
        const data = docSnap.data();
        this.user = new User(data);  // Initialisiere den Benutzer mit den Daten aus dem Snapshot
        this.birthDate = this.user.birthDate;  // Optional: Gebe das Geburtsdatum an
      } else {
        console.error('Benutzer nicht gefunden.');
      }
    } catch (error) {
      console.error('Fehler beim Laden des Benutzers:', error);
    }
  }

  async saveUser() {
    if (!this.userId) {
      console.error('User ID fehlt. Speichern nicht möglich.');
      return;
    }

    this.loading = true;

    try {
      const userDocRef = doc(this.firestore, `users/${this.userId}`);

      // Konvertiere birthDate zu Firestore Timestamp, wenn es ein Date ist
      const updatedUser = { ...this.user };

     /*  if (this.user.birthDate instanceof Date) {
        updatedUser.birthDate = Timestamp.fromDate(this.user.birthDate);  // Umwandlung in Firestore Timestamp
      } */

      // Update in Firestore
      await updateDoc(userDocRef, updatedUser);

      console.log('Benutzerdaten erfolgreich aktualisiert.');
      this.dialogRef.close(true); // Dialog schließen, Erfolg melden
    } catch (error) {
      console.error('Fehler beim Speichern der Benutzerdaten:', error);
    } finally {
      this.loading = false;
    }
  }
}
