import React from 'react';
import Form from "@rjsf/core";
// import schema from './data/schema';
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

const schema = {
    title: "Nhập thông tin điểm bán123",
    description: "Vui lòng nhập thông tin điểm bán.",
    type: "object",
    properties: {
        province: {
            type: "string",
            title: "Tỉnh",
            enum: ["hue", "danang", "quangnam"],
            enumNames: ["Thừa Thiên Huế", "Đà Nẵng", "Quảng Nam"]
        },
        district: {
            type: "string",
            title: "Huyện",
            enum: ["hue", "danang", "quangnam"],
            enumNames: ["Thừa Thiên Huế", "Đà Nẵng", "Quảng Nam"]
        },
        commune: {
            type: "string",
            title: "Xã",
            enum: ["hue", "danang", "quangnam"],
            enumNames: ["Thừa Thiên Huế", "Đà Nẵng", "Quảng Nam"]
        },
        id: {
            type: "integer",
            title: "Mã điểm bán",
        },
        name: {
            type: "string",
            title: "Tên điểm bán",
        },
        EZ: {
            type: "number",
            title: "Số EZ",
            minLength: 9
        },
        type: {
            type: 'array',
            title: "Loại điểm bán",
            items: {
                type: "string",
                enum: ["phapnhan", "thucuoc", "tkgt"],
                enumNames: ["Pháp nhân", "Thu cước", "TK&GT"]
            },
            uniqueItems: true,
        },
        files: {
            type: "string",
            format: "data-url",
            title: "Hợp đồng"
        },
        table: {
            type: "boolean",
            title: "Bảng hiệu",
            enum: ["dung", "ngang"],
            enumNames: ["Đứng", "Ngang"]
        },
        date: {
            type: "string",
            title: "Ngày hoạt động",
            format: "date"
        }
    }
}
export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleError = this.handleError.bind(this);
        // schema.properties.district.enumNames = ["namdong1", "phuloc1", "phongdien1"];
    }

    objAddress = {
        hue: ["namdong", "phuloc", "phongdien"],
        danang: ["lienchieu", "thanhkhe", "sontra"],
        quangnam: ["dienban", "namphuoc", "thangbinh"]
    };

    handleChange({ formData }) {
        let arPro = Object.getOwnPropertyNames(formData);
        for (const pro of arPro) {
            if (pro === "province") {
                schema.title = Date.now();
                console.log(schema.title);
                console.log(formData[pro]);
                console.log(this.objAddress[formData[pro]]);
                schema.properties.district = {
                    type: "string",
                    title: "Huyện",
                    enum: this.objAddress[formData[pro]],
                    enumNames: this.objAddress[formData[pro]]
                };
            }
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
            <Form schema={schema} uiSchema={uischema}
                onChange={this.handleChange} onSubmit={this.handleSubmit} onError={this.handleError} />
        )
    }
}