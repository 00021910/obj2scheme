interface IScheme {
    type: object | string;
    properties?: object;
}

let schemeFiller = (scheme: IScheme | any, root: object) => {
    for (let key in root) {
        if (typeof root[key] === "object") { 
            scheme.properties[key] = { type: "object", properties: {}}
            schemeFiller(scheme.properties[key], root[key]); 
            console.log(scheme.properties[key].properties);
        }
        else scheme.properties[key] = { type: typeof root[key] };
    }
}

export let obj2scheme = (jsonObj: object) => {
    let scheme: IScheme = { type: "object", properties: {} };
    schemeFiller(scheme, jsonObj);
    if (typeof jsonObj !== 'object') scheme = {type: "error", properties: { message: "please, pass a json object"}};
    return scheme;
}