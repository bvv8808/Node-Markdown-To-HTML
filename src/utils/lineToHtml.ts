// const seperateToken = require("./seperateToken");
import seperateToken from "./seperateToken";
import tokenToTag from "./tokenToTag";

// tag별 style속성
const styles = {
  b: "font-weight: bold;",
  "p class='p-impact'": "background-color: #aeaeae; display:inline;",
  "div class='info'": "",
  a: "",
  h1: "",
  h2: "",
  h3: "",
  h4: "",
  h5: "",
  h6: "",
  code: "background-color: #aeaeae; white-space: pre; overflow: auto;",
};

// 멀티라인 태그를 위해 lineToHtml 함수를 처음 호출하는 모듈에서 stackToken을 관리하고 갱신해야함.
const lineToHtml = (line: string, stackToken: string[] = []): string => {
  // let copiedStackToken = [...stackToken];
  let result = "";
  const [valueIsToken, value, rest] = seperateToken(line);

  if (!value && !rest) {
    // 빈줄
    const lastStack = stackToken[stackToken.length - 1];
    if (lastStack === "div class='info'") {
      stackToken.pop();
      return "</div><br/>";
    } else if (lastStack === "p") {
      return "</p><br/>";
    } else return "<br/>";
  }

  const tag = tokenToTag(value);
  if (valueIsToken) {
    const lastStack = stackToken[stackToken.length - 1];
    if (lastStack !== "div class='info'") {
      if (lastStack === tag) {
        if (tag === "p class='p-impact'") result += "</p>";
        else result += `</${tag}>`;
        stackToken.pop();
      } else {
        console.log(`#${tag} `, styles[tag]);
        result += `<${tag} style="${styles[tag]}">`;
        stackToken.push(tag);
      }
    }
  } else {
    if (!stackToken.length) {
      result += "<p>";
      stackToken.push("p");
    }
    result += value;
  }

  // 라인의 끝까지 분할하여 더 이상 분할할 부분이 없을 때
  if (!rest) {
    const tag = stackToken[stackToken.length - 1];
    if (tag) {
      switch (tag) {
        case "div class='info'":
        case "code":
          return result;

        default:
          stackToken.pop();
          return result + `</${tag}>`;
      }
    } else return result;
    // return tag && tag !== "div class='info'" ? result + `</${tag}>` : result;
  } else return result + lineToHtml(rest, stackToken);
};

export default lineToHtml;
