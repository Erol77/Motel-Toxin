//const pug = require('pug');
//const compiledFunction = pug.compileFile('/pug/index.pug');
import "./scss/style.scss";
import "./script.js";
//import "./pug/index.pug";
console.log("hello world!");
import component from "./component";
document.body.appendChild(component());
