export class User {
    firstName: string;
    lastName: string;
    street: string;
    streetnumber: number;
    zipCode: number;
    city: string;
    birthDate: Date | null;
    email: string;
    phonenumber: number;

    constructor(obj?: any) {
        this.firstName = obj?.firstName || '';
        this.lastName = obj?.lastName || '';
        this.street = obj?.street || '';
        this.streetnumber = obj?.streetnumber || 0;
        this.zipCode = obj?.zipCode || 0;
        this.city = obj?.city || '';
        this.email = obj?.email || '';
        this.phonenumber = obj?.phonenumber || 0;

        // Firestore-Timestamp oder Unix-Timestamp in ein Date-Objekt umwandeln
        if (obj?.birthDate?.toDate) {
            this.birthDate = obj.birthDate.toDate(); // Firestore-Timestamp (z. B. { seconds, nanoseconds })
        } else if (typeof obj?.birthDate === 'number') {
            this.birthDate = new Date(obj.birthDate); // Unix-Zeitstempel
        } else {
            this.birthDate = null; // Kein gültiges Datum
        }
    }
}