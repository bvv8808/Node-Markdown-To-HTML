const filterNeedSpace = (line: string): any[] => {
  const idxSpace = line.indexOf(" ");
  const beforeSpace = line.substr(0, idxSpace);
  const tokens = ["#", "##", "###", "####", "#####", "######", "-", "+", "*"];
  const beforeIsToken = Boolean(tokens.indexOf(beforeSpace) + 1);

  if (beforeIsToken) {
    return [true, beforeSpace, line.substr(idxSpace).trim()];
  }
  return [false, line];
};

export default (line: string): any[] => {
  const filter1 = filterNeedSpace(line);
  if (filter1[0]) return filter1;
  else {
    line = filter1[1];

    let token = "";
    let txt = "";
    let i = 0;
    const firstLetter = line[0];
    const firstIsToken = Boolean(
      ["[", "]", "`", "_", ">", "*"].indexOf(firstLetter) + 1
    );

    for (; i < line.length; i++) {
      const c = line[i];
      switch (c) {
        case ">":
        case "[":
        case "]":
        case "`":
        case "_":
        case "*":
          if (!firstIsToken) return [false, txt.trim(), line.substr(i)];
          token += c;
          break;
        default:
          if (firstIsToken) return [true, token, line.substr(i).trim()];
          txt += c;
      }
    }
    return firstIsToken ? [true, token, ""] : [false, txt.trim(), ""];
  }
};
