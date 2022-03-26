const jsdom = require("jsdom");
const { JSDOM } = jsdom;// object m se key nikal li 


const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`); // key ki html pass kr di
console.log(dom.window.document.querySelector("p").textContent); // document pr selector lgaya
// is selector pr query lgao 
// .textContent .............. uske andr ka text de dega
// "Hello world"