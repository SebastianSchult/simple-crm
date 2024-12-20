export class User {
    firstName: string;
    lastName: string;
    birthDate: number;
    email: string;
    phonenumber: number;

    constructor(obj?: any){
        this.firstName = obj ? obj.firstName: '';
        this.lastName = obj ? obj.lastName: '';
        this.birthDate = obj ? obj.birthDate: '';
        this.email = obj ? obj.email: '';
        this.phonenumber = obj ? obj.phonenumber: '';

    }
}