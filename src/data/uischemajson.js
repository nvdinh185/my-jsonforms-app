var uischemajson = {
    "type": "VerticalLayout",
    "elements": [
        {
            "type": "HorizontalLayout",
            "elements": [
                {
                    "type": "Control",
                    "scope": "#/properties/name"
                },
                {
                    "type": "Control",
                    "scope": "#/properties/birthDate"
                }
            ]
        },
        {
            "type": "HorizontalLayout",
            "elements": [
                {
                    "type": "Control",
                    "scope": "#/properties/occupation",
                    "suggestion": [
                        "Accountant",
                        "Engineer",
                        "Freelancer",
                        "Journalism",
                        "Physician",
                        "Student",
                        "Teacher",
                        "Other"
                    ]
                }
            ]
        }
    ]
}

export default uischemajson;