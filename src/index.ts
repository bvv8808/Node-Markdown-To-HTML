import utils from "./utils";

module.exports = (filename: string): string => {
  let result = "";
  let stackToken: string[] = [];

  result += `<div class='md-wrapper' style="">`;

  for (let line of utils.readFileGen(filename)) {
    let thisHtml = utils.lineToHtml(line, stackToken);

    // [link] href
    const openIdx = thisHtml.indexOf("(");
    if (openIdx !== -1) {
      const closeIdx = thisHtml.indexOf(")");
      if (closeIdx) {
        if (thisHtml.indexOf("<a") !== -1) {
          const href = thisHtml.substring(openIdx + 1, closeIdx);
          thisHtml = thisHtml.replace("<a", `<a href='${href}'`);
          thisHtml = thisHtml.split(`(${href})`).join("");
        }
      }
    }

    // console.log(`[${idx++}] `, thisHtml);
    // console.log(stackToken);
    result += thisHtml + "\n";
  }

  if (stackToken[stackToken.length - 1] === "div class='info'")
    result += "</div>";

  result += "</div>";
  return result;
};
