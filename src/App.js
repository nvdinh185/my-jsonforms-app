import './App.css';
import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';

// import { person } from '@jsonforms/examples';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';

// import schema from './test/jsonschema';
// import uischema from './test/uischema';
// import initialData from './test/formdata';

import schema from './data/schemajson';
import uischema from './data/uischemajson';
import initialData from './data/datajson';

// const schema = person.schema;
// const uischema = person.uischema;
// const initialData = person.data;

function App() {
    const [data, setData] = useState(initialData);
    return (
        <div className='App'>
            <JsonForms
                schema={schema}
                uischema={uischema}
                data={data}
                // uiSchema={uischema}
                // formData={data}
                renderers={materialRenderers}
                cells={materialCells}
                onChange={({ data, _errors }) => setData(data)}
            />
        </div>
    );
}

export default App;
