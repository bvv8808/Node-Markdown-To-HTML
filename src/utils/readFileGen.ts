const fs = require("fs");

const readLine = (
  fd: any,
  buffer: Buffer,
  bufferSize: number,
  position: number
): [string, number] => {
  let line = "",
    readSize;
  const crSize = "\n".length;
  // console.log("####");

  while (true) {
    readSize = fs.readSync(fd, buffer, 0, bufferSize, position);

    if (readSize > 0) {
      const temp = buffer.toString("utf8", 0, readSize);
      const idx = temp.indexOf("\n");
      // console.log("#", position);
      if (idx > -1) {
        line += temp.substr(0, idx);
        position += idx + crSize;
        break;
      } else {
        line += temp;
        position += temp.length;
      }
    } else {
      position = -1;
      break;
    }
  }
  return [line.trim(), position];
};

export default function* readFileGen(filename: string) {
  let fd: any;

  try {
    fd = fs.openSync(filename, "rs");
    const stats = fs.fstatSync(fd);
    const bufferSize = Math.min(stats.size, 1024);
    const buffer = Buffer.alloc(bufferSize + 4);
    let filepos = 0,
      line;

    let i = 0;
    while (filepos > -1) {
      [line, filepos] = readLine(fd, buffer, bufferSize, filepos);

      if (filepos === -1) {
        return "";
      }
      yield line;
    }

    return buffer.toString();
  } catch (e) {
    console.error("readLine: ", e.message);
  } finally {
    fd && fs.closeSync(fd);
  }
}
