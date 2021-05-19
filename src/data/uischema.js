export default {
    "firstName": {
        "ui:autofocus": true,
        "ui:emptyValue": "",
        "ui:autocomplete": "family-name"
    },
    "lastName": {
        "ui:emptyValue": "",
        "ui:autocomplete": "given-name"
    },
    "age": {
        "ui:widget": "range",
        "ui:title": "Age of person",
        "ui:description": "(earthian year)"
    },
    "bio": {
        "ui:widget": "textarea"
    },
    "password": {
        "ui:widget": "password",
        "ui:help": "Hint: Make it strong!"
    },
    "telephone": {
        "ui:options": {
            "inputType": "tel"
        }
    }
}