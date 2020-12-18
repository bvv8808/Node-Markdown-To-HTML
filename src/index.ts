import utils from "./utils";

export default (filename: string): string => {
  // let curSection = "";
  // console.log("hi");
  // for (let line of utils.readFileGen(filename)) {
  //   let curHtml = "미정";
  //   const [token, txt] = utils.seperateToken(line);
  //   // console.log([token, txt]);
  //   if (token && txt) {
  //     // SINGLE LINE & SINGLE TOKEN
  //     if (~["#", "##", "###", "-", "+", "*"].indexOf(token)) {
  //       // console.log("SINGLE LINE & SINGLE TOKEN");
  //       if (token === "#" || token === "##" || token === "###") {
  //         let tagName = "";
  //         switch (token) {
  //           case "#":
  //             tagName = "h1";
  //             break;
  //           case "##":
  //             tagName = "h2";
  //             break;
  //           case "###":
  //             tagName = "h3";
  //             break;
  //         }
  //         curHtml = `<${tagName}>${txt.trimLeft()}</${tagName}>`;
  //       }
  //     }
  //   } else if (txt) {
  //     // Normal Line
  //     if (!curSection) curHtml = `<p>${txt.trim()}</p>`;
  //   } else {
  //     curSection = "";
  //     curHtml = "<br/>";
  //   }
  //   // console.log(curHtml);
  // }
  let result = "";
  let idx = 0;
  for (let line of utils.readFileGen(filename)) {
    console.log(`[${idx++}] `, utils.lineToHtml(line));
  }

  return "";
};
