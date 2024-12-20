export class User {
    firstName: string;
    lastName: string;
    birthday: number;
    email: string;
    phonenumber: number;

    constructor(obj?: any){
        this.firstName = obj ? obj.firstName: '';
        this.lastName = obj ? obj.lastName: '';
        this.birthday = obj ? obj.birthday: '';
        this.email = obj ? obj.email: '';
        this.phonenumber = obj ? obj.phonenumber: '';

    }
}