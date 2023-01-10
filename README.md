# node-study

## 코드 팁

-   하나의 함수에는 **하나의 기능**만 구현

## Node.js

-   Chrome V8 JavaScript 엔진으로 빌드 된 JavaScript 런타임(환경)
-   브라우저에만 실행 가능했던 **JavaScript를 로컬환경에서 실행할 수 있는 프로그램**

## npm (Node Package Manager)

-   Node.js 기반에서 실행될 수 있는 **모듈을 관리하는 관리자**
-   npm 사이트를 방문하여 살펴보면 다른 사람들이 만들어놓은 소스코드들을 무료로 다운로드해 올 수 있다.

## yarn

-   페이스북이 자체 개발한 것으로 npm과 같은 역할을 하는 **javascript 패키지 매니저**
-   **성능(속도)**과 **보안 이슈**를 보완한 javascript 패키지 매니저

## 퍼사드 패턴 (Facade Pattern)

-   **유지보수성**과 **가독성**을 위해 로직을 분리하여 하나의 함수에 하나의 기능만 구현하는 패턴
-   리팩토링의 일부

## JS 파일 import - export

1. 터미널 : yarn init 로 package.json 파일 생성
2. package.json 에 "type" : "module" 추가
3. import - export 사용 가능
