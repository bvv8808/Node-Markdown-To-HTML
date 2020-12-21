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

### styleOptions

```javascript
const mdToHtml = require("autin-html-markdown-to-html");

const resultHtml = mdToHtml("./something.md", { a: "color: red;" });
```

- styleOptions객체를 옵션으로 원하는 스타일을 추가할 수 있습니다.

  | md 문법 |    변환된 tag명    |                       styleOptions 예시                        |
  | ------- | :----------------: | :------------------------------------------------------------: |
  | `       | p class='p-impact' |                  {"p class='" : "color:red;"}                  |
  | \*\*    |         b          |                       {b: "color:red;"}                        |
  | \_      |         i          |                       {i: "color:red;"}                        |
  | >       |  div class='info'  | {"div class='info': "margin-bottom: 20px; border-color: red;"} |
  | - blah  |         li         |                      {li: "color: red;"}                       |
  | ```     |        code        |                    {code: "padding: 5px;"}                     |

>

- 현재 md파일내 한글이 있으면 정상적으로 변환되지 않습니다.
- 아직 개발 초기 단계이기 때문에 버그가 있고, 지원하지 않는 마크다운 문법들이 다수 존재합니다.

## Ver.English

### install package

```shell
npm i austin-html-markdown-to-html
```

### how to use

```javascript
const mdToHtml = require("autin-html-markdown-to-html");

const resultHtml = mdToHtml("./something.md");
```

- The path of 'md' file that you will transfer starts at the path of package.json file

### styleOptions

```javascript
const mdToHtml = require("autin-html-markdown-to-html");

const resultHtml = mdToHtml("./something.md", { a: "color: red;" });
```

- You can add a custom style to transfered html tag by inserting styleOptions object.

  | md Grammar | transfered tag name |                    example of styleOptions                     |
  | ---------- | :-----------------: | :------------------------------------------------------------: |
  | `          | p class='p-impact'  |                  {"p class='" : "color:red;"}                  |
  | \*\*       |          b          |                       {b: "color:red;"}                        |
  | \_         |          i          |                       {i: "color:red;"}                        |
  | >          |  div class='info'   | {"div class='info': "margin-bottom: 20px; border-color: red;"} |
  | - blah     |         li          |                      {li: "color: red;"}                       |
  | ```        |        code         |                    {code: "padding: 5px;"}                     |

>

- Now, This can transfer only English. not Korean.
- Now is a childhood of this package so there are many bugs and there are many md grammar that can't transfer.
