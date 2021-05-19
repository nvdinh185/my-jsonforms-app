import Form from "@rjsf/core";
import schema from './data/schema';
import uischema from './data/uischema';
import data from './data/formdata';

function App() {

    const log = (type) => console.log.bind(console, type);

    return (
        <div className="App">
            <Form schema={schema}
                uiSchema={uischema}
                formData={data}
                onChange={log("changed")}
                onSubmit={log("submitted")}
                onError={log("errors")}
            />
        </div>
    );
}

export default App;