export default class ContactForm {
    constructor(firstName: string, lastName:string, petName:string, email:string, phoneNumber:string, subject:string, message:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.petName = petName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.subject = subject;
        this.message = message;
    }
    firstName:string;
    lastName:string;
    petName:string;
    email:string;
    phoneNumber:string;
    subject:string;
    message:string;
}
