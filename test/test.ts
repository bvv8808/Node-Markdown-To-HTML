// import mdToHtml from "../dist";
const mdToHtml = require("../src");
// console.log(mdToHtml);
console.log("# RESULT # \n", mdToHtml("./test/test.md", { a: "hi" }));

// console.log("abc".substr(0));
// console.log("".substr(0));
