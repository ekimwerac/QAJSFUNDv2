import User from './User';

export default class Form {

    newUserUrl = `http://localhost:3000/users`;

    constructor() {
        this.user = new User();
    }

    getRemainingFormValues = () => {
        if (this.user.firstName && this.user.lastName && this.user.email) {
            this.user.setTitle(document.querySelector("#title").value);
            this.user.setPhoneNumber(document.querySelector("#phoneNumber").value);
            this.user.setDob(document.querySelector("#dob").value);
            this.user.setGender(document.querySelector('input[name="genderRadios"]:checked').value);
        } else {
            alert("The form contains errors!");
        }
    }

    submitForm = event => {
        event.preventDefault();
        this.getRemainingFormValues();
        if (this.user) {
            this.sendForm()
                .then(response => {
                    response.ok ? alert(`Data submitted`) : alert(`There was a problem submitting the data`);
                });
        }
    };

    async sendForm() {

        let response = await fetch(newUserUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.user)
        });
        return response;
    }

    activateEventListeners = () => {
        document.querySelector('#signUpForm').addEventListener('submit', this.submitForm);
        document.querySelector('#firstName').addEventListener('change', this.user.setFirstName);
        document.querySelector('#lastName').addEventListener('change', this.user.setLastName);
        document.querySelector('#email').addEventListener('change', this.user.setEmail);
    }
}