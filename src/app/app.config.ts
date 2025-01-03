import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-799d8","appId":"1:712496575833:web:578bcdbb0812aba1844848","storageBucket":"simple-crm-799d8.firebasestorage.app","apiKey":"AIzaSyDBme8v9hpgEeDmB1HUHDJZXncsNUZuxMs","authDomain":"simple-crm-799d8.firebaseapp.com","messagingSenderId":"712496575833"})), provideFirestore(() => getFirestore())]
};
