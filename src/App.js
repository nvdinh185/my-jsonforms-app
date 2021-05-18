import Form from "@rjsf/core";
import schema2 from './data/schema';
// import uischema from './data/uischema';
// import data from './data/formdata';

function App() {

    const schema = {
        title: "Todo",
        type: "object",
        required: ["title"],
        properties: {
            title: { type: "string", title: "Title", default: "A new task" },
            done: { type: "boolean", title: "Done?", default: false }
        }
    }

    const log = (type) => console.log.bind(console, type);

    return (
        <div className="App">
            <Form schema={schema}
                onChange={log("changed")}
                onSubmit={log("submitted")}
                onError={log("errors")}
            />
        </div>
    );
}

export default App;