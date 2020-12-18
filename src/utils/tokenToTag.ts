export default (token: string): string => {
  let tag = "";
  switch (token) {
    case "#":
      tag = "h1";
      break;
    case "##":
      tag = "h2";
      break;
    case "###":
      tag = "h3";
      break;
    case "####":
      tag = "h4";
      break;
    case "#####":
      tag = "h5";
      break;
    case "######":
      tag = "h6";
      break;
    case "-":
    case "*":
    case "+":
      tag = "li";
      break;
    case "`":
      tag = "p calss='p-impact'";
      break;
    case "```":
      tag = "code";
      break;
    case "**":
      tag = "b";
      break;
    case "_":
      tag = "i";
      break;
    case "[":
    case "]":
      tag = "a";
      break;
    case ">":
      tag = "div class='info'";
      break;
    default:
  }

  return tag;
};
