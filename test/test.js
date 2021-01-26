// import mdToHtml from "../dist";
var mdToHtml = require("../src");
// console.log(mdToHtml);
console.log("# RESULT # \n", mdToHtml("./test/test.md", { a: "hi" }));
// console.log("abc".substr(0));
// console.log("".substr(0));
