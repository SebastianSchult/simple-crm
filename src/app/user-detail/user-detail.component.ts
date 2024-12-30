import { Component, inject, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collection, doc, docData, onSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  route: ActivatedRoute = inject(ActivatedRoute);  // Injiziere ActivatedRoute
  user$: Observable<any> | undefined;
  userID ='';

  ngOnInit() {
    // Extrahiere die userId aus der URL
    const userId = this.route.snapshot.paramMap.get('id');
  

    if (userId) {
      console.log('Abgerufene User ID:', userId);
      // Hol das User-Dokument aus Firestore mit der User-ID
      const userDoc = doc(this.firestore, `users/${userId}`);
      this.user$ = docData(userDoc);  // Beobachte die Daten des Users
      
    }
  }
}


