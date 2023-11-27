import Validators from './Validators';

export default class User {
    constructor(title = ``, firstName = ``, lastName = ``, email = ``, phoneNumber = ``, dob = ``, gender = ``) {
        // this.title = title;
        // this.firstName = firstName;
        // this.lastName = lastName;
        // this.email = email;
        // this.phoneNumber = phoneNumber;
        // this.dob = dob;
        // this.gender = gender;
    }

    setTitle(title) {
        this.title = title;
    }

    setFirstName(event) {
        let { update, name } = Validators.validateName(event);
        if(update) {
            this.firstName = name;
        }
    }

    setLastName(event) {
        let { update, name } = Validators.validateName(event);
        if(update) {
            this.lastName = name;
        }
    }

    setEmail(event) {
        let { update, email } = Validators.validateEmail(event);
        if(update) {
            this.email = email;
        }
    }

    setPhone(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    setDob(dob) {
        this.dob = dob;
    }

    setGender(gender) {
        this.gender = gender;
    }
}