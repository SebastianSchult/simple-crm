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
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, DatePipe],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  route: ActivatedRoute = inject(ActivatedRoute); // Injiziere ActivatedRoute
  user: User = new User();
  userID = '';

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
}
