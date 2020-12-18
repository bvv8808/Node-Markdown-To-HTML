// const seperateToken = require("./seperateToken");
import seperateToken from "./seperateToken";
import tokenToTag from "./tokenToTag";

// 멀티라인 태그를 위해 lineToHtml 함수를 처음 호출하는 모듈에서 stackToken을 관리하고 갱신해야함.
const lineToHtml = (line: string, stackToken: string[] = []): string => {
  let copiedStackToken = [...stackToken];
  let result = "";
  const [valueIsToken, value, rest] = seperateToken(line);

  if (!value && !rest) {
    // 빈줄
    const lastStack = copiedStackToken[copiedStackToken.length - 1];
    if (lastStack === "div class='info'") return "</div><br/>";
    else if (lastStack === "p") {
      return "</p><br/>";
    } else return "<br/>";
  }

  const tag = tokenToTag(value);

  if (valueIsToken) {
    if (copiedStackToken[copiedStackToken.length - 1] === tag) {
      result += `</${tag}>`;
      copiedStackToken.pop();
    } else {
      result += `<${tag}>`;
      copiedStackToken.push(tag);
    }
  } else {
    if (!copiedStackToken.length) {
      result += "<p>";
      copiedStackToken.push("p");
    }
    result += value;
  }

  // 라인의 끝까지 분할하여 더 이상 분할할 부분이 없을 때
  if (!rest) {
    const tag = copiedStackToken[0];
    return tag && tag !== "div class='info'" ? result + `</${tag}>` : result;
  } else return result + lineToHtml(rest, copiedStackToken);
};

export default lineToHtml;
