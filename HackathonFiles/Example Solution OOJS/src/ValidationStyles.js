export default class ValidationStyles {
    
    static displayErrorBorder = (inputValid, element) => {
        if (!inputValid) {
          if (!element.classList.contains("invalid")) {
            element.classList.toggle("invalid");
          }
        } else {
          if (element.classList.contains("invalid")) {
            element.classList.toggle("invalid");
          }
        }
    }

    static displayMessage = (element, message) => {
        const msgcontent = document.createElement("div");
        msgcontent.id = "msgcontent";
        element.appendChild(msgcontent);
        msgcontent.textContent = message;
    }

    static removeMessage = element => {
        if (element.childNodes.length > 0) {
            const noChildren = element.childNodes.length
            for (let i = 0; i < noChildren; i++) {
                element.removeChild(element.firstChild);
            }
        }
    }
}