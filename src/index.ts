import utils from "./utils";

module.exports = (filename: string, styleOptions?: any): string => {
  let result = "";
  let stackToken: string[] = [];
  let styles = {
    b: "font-weight: bold;",
    "p class='p-impact'": "background-color: #cdcdcd; display:inline;",
    "div class='info'":
      "width: 90%;background-color: #ededed;padding: 10px;border-left: 4px solid #3fc83f;white-space: pre;",
    a: "color: #8dd28d;cursor:pointer",
    p: "display: inline-block;padding: 0;margin: 0;margin-bottom: 5px;",
    h1: "",
    h2: "",
    h3: "",
    h4: "",
    h5: "",
    h6: "",
    code:
      "display: block;background: #f1f1f1;white-space: pre;padding: 5px;width: 90%;font-size: 14px;overflow: auto;",
  };

  if (styleOptions) {
    try {
      const entries = Object.entries(styleOptions);
      entries.forEach((value, idx) => {
        const [optionKey, optionValue] = value;
        styles[optionKey] += optionValue;
      });
    } catch (e) {
      console.log(e.message);
    }
  }
  result += `<div class='md-wrapper' style="width:100%;height:100%;">`;

  for (let line of utils.readFileGen(filename)) {
    let thisHtml = utils.lineToHtml(line, stackToken, styles);

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
