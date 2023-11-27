import ValidationStyles from "./ValidationStyles";

export default class Validators {

    static nameRegEx = /^[a-zA-Z\'\-]+$/g;
    static emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;

    static validateName = event => {
        const nameInput = event.currentTarget;
        const name = nameInput.value;
        const idCapFirst = (nameInput.id.slice(0, 1).toUpperCase()) + nameInput.id.slice(1);
        const msgName = document.querySelector(`#msg${idCapFirst}`);
        let update = false;

        if (name.length > 1 && name.length < 25) {
            if (!name.match(Validators.nameRegEx)) {
                ValidationStyles.displayMessage(msgName, "Only letters, hyphens and apostrophes are allowed");
                update = false;
            } else {
                ValidationStyles.removeMessage(msgName);
                update = true;
            }
        } else {
            update = false;
            ValidationStyles.displayMessage(msgName, "The name entered is either too short or too long.");
        }
        ValidationStyles.displayErrorBorder(update, nameInput);

        return {update, name};
    }

    static validateEmail = () => {
        const email = document.forms[0]["email"].value;
        const emailInput = document.querySelector("#email");
        const msgEmail = document.querySelector("#msgEmail");
        let update = false;

        if(!email.match(Validators.emailRegex)) {
          update = false;
          ValidationStyles.removeMessage( msgEmail );
          ValidationStyles.displayMessage( msgEmail, "Email address not valid")
        }
        else{
          update = true;
          ValidationStyles.removeMessage( msgEmail );
        }
        
        ValidationStyles.displayErrorBorder( update, emailInput );

        return {update, email};
    }
}