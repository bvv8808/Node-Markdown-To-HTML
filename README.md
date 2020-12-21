# Austin-Markdown-To-HTML

### v0.1.0

패키지 설명은 한글 버전과 영문 버전 두 가지입니다.
The version of description of this package two, Ver.Korean and Ver.English

## Ver.Korean

### 패키지 설치

```shell
npm i austin-html-markdown-to-html
```

### 패키지 사용

```javascript
const mdToHtml = require("autin-html-markdown-to-html");

const resultHtml = mdToHtml("./something.md");
```

- 변환하는 md파일의 경로는 프로젝트 폴더의 루트 위치를 출발지로 합니다. (= 프로젝트의 package.json 파일 위치가 출발지 입니다)

- styleOptions객체를 옵션으로 추가할 수 있습니다.
