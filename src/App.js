import { Component } from 'react';
import Form from "@rjsf/core";
import schema from './data/schema';
import uischema from './data/uischema';
import data from './data/formdata';

// function App() {

//     const log = (type) => console.log.bind(console, type);

//     return (
//         <div className="App">
//             <Form schema={schema}
//                 uiSchema={uischema}
//                 formData={data}
//                 onChange={log("changed")}
//                 onSubmit={log("submitted")}
//                 onError={log("errors")}
//             />
//         </div>
//     );
// }

// export default App;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    handleChange({ formData }) {
        console.log(formData);
    }

    handleSubmit({ formData }) {
        console.log(formData);
    }

    handleError(err) {
        console.log(err);
    }

    render() {
        return (
            <Form schema={schema} uiSchema={uischema} formData={data}
                onChange={this.handleChange} onSubmit={this.handleSubmit} onError={this.handleError} />
        )
    }
}