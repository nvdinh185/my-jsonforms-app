var schemajson = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "minLength": 3,
            "description": "Please enter your name..."
        },
        "birthDate": {
            "type": "string",
            "format": "date"
        },
        "occupation": {
            "type": "string"
        }
    },
    "required": [
        "occupation"
    ]
}

export default schemajson;