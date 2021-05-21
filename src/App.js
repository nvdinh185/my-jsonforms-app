import React from 'react';
import Form from "@rjsf/core";
import schema from './data/schema';
import uischema from './data/uischema';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleError = this.handleError.bind(this);
        this.state = { schema: schema };
    }

    objAddress = {
        hue: ["namdong", "phuloc", "phongdien"],
        danang: ["lienchieu", "thanhkhe", "sontra"],
        quangnam: ["dienban", "namphuoc", "thangbinh"]
    };

    handleChange({ formData }) {
        // console.log(formData);
        let arPro = Object.getOwnPropertyNames(formData);
        // console.log(arPro);
        // chỉ khi thay đổi tỉnh thì mới thực hiện
        if (arPro.length === 1 && arPro[0] === "province") {
            // console.log(formData[arPro[0]]);
            // console.log(this.objAddress[formData[pro]]);
            this.state.schema.properties.district = {
                type: "string",
                title: "Huyện",
                enum: this.objAddress[formData[arPro[0]]],
                enumNames: this.objAddress[formData[arPro[0]]]
            };
            this.state.schema.properties.commune = {
                type: "string",
                title: "Xã",
                enum: this.objAddress[formData[arPro[0]]],
                enumNames: this.objAddress[formData[arPro[0]]]
            };
            this.setState(this.state);
            console.log(this.state.schema);
        }
    }

    handleSubmit({ formData }) {
        console.log(formData);
    }

    handleError(err) {
        console.log(err);
    }

    render() {
        return (
            <Form schema={this.state.schema} uiSchema={uischema}
                onChange={this.handleChange} onSubmit={this.handleSubmit} onError={this.handleError} />
        )
    }
}