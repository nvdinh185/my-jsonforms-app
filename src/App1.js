import Form from "@rjsf/core";

function App() {

  const schema = {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
      title: { type: "string", title: "Title", default: "A new task" },
      done: { type: "boolean", title: "Done?", default: false }
    }
  };

  const uischema = {
    firstName: {
      "ui:autofocus": true,
      "ui:emptyValue": "",
      "ui:autocomplete": "family-name"
    },
    lastName: {
      "ui:emptyValue": "",
      "ui:autocomplete": "given-name"
    },
    age: {
      "ui:widget": "updown",
      "ui:title": "Age of person",
      "ui:description": "(earthian year)"
    },
    bio: {
      "ui:widget": "textarea"
    },
    password: {
      "ui:widget": "password",
      "ui:help": "Hint: Make it strong!"
    },
    date: {
      "ui:widget": "alt-datetime"
    },
    telephone: {
      "ui:options": {
        "inputType": "tel"
      }
    }
  }

  const log = (type) => console.log.bind(console, type);

  return (
    <div className="App">
      <Form schema={schema}
        uischema={uischema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")}
      />
    </div>
  );
}

export default App;