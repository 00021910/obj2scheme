import { obj2scheme } from "./core";

let obj = {
    a: [1, 2, 3],
    b: [
        {name: "x", value:1},
        {name: "y", value:2}
    ],
    c: "hello world"
}

console.log(obj2scheme(obj));