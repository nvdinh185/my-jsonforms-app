const schema = {
    title: "Nhập thông tin điểm bán",
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

export default schema