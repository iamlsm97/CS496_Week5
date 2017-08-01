# [CS496_Week5]
## Project Name: ADMIT.IO
### Team: [jihoon ko](https://github.com/jihoon-ko), [SeungMin Lee](https://github.com/iamlsm97)

## 0. introduction
ADMIT.IO는 수업의 퀴즈, 회의의 투표 등을 보조해주는 온라인 투표 서비스로, 사용자는 개설자와 참여자로 구분됩니다.

1. 개설자
개설자는 새로운 방을 개설하거나 기존에 개설했던 방에 개설자로 입장할 수 있습니다. Room Code 는 jwt를 통해 발급받은 토큰값으로 개설했던 방에 다시 입장할 때 필요합니다.  
개설자는 방에서 유저추가, 유저관리, 질문추가, 투표종료, pdf 파일 변경 등의 작업을 할 수 있습니다.
- 유저추가: 이름을 입력하여 유저를 추가할 수 있습니다. 유저에게는 고유한 8자리의 User Code가 발급됩니다.
- 유저관리: 유저의 상태를 활성화 시켜 투표 참여 대상으로 추가할 수 있고, 유저를 방에서 퇴장시킬 수 있습니다.
- 질문추가: 입력한 질문과 함께 찬성/반대/기권 중 하나를 선택할 수 있는 투표를 생성합니다. 현재 투표가 진행중이 아니어야만 새로운 투표를 만들 수 있습니다.
- 투표종료: 개설자는 투표의 참가인원을 확인하고 언제든 투표를 종료할 수 있습니다. 종료된 투표는 3초간 개설자와 참여자에게 보여지며, 종료된 투표들의 결과는 이전결과 영역에 나열됩니다.
- 링크변경: 개설자는 pdf 파일을 올릴 수 있습니다. 올린 pdf 파일은 모든 참여자에게 보여집니다.

2. 참여자
참여자는 개설자가 개설한 방에 들어갈 수 있습니다. 방에 들어가기 위해서는 개설자가 발급한 User Code를 입력해야 합니다.  
참여자는 방에서 개설자가 올린 pdf 파일을 볼 수 있고, 활성화 상태에 따라 개설자가 올린 투표에 참여할 수 있습니다.

## 1. frontend
- Vue.js, vue-socket.io, Material Design (Vue Material)
- Code dependencies
    - vue, vue-router,
    - axios, vue-axios,
    - socket.io-client, vue-socket.io,
    - vue-material

Install dependencies:
```bash
$ npm install
```
Run web application:
```bash
$ npm run dev
```
Then, open http://localhost:8080 on browser

## 2. backend
- Node.JS, socket.io
- Code dependencies: express, socket.io
- Server host: http://localhost:3000 default

Install dependencies:
```bash
$ npm install
```
Run server:
```bash
$ npm start
```

## 3. Code Structure

- backend/
    - bin/
        - www : server code with socket.io
    - routes/
        - index.js
    - app.js: main JavaScript Server code
    - package.json : include code dependencies
   
- frontend/
    - config/
        - index.js : proxyTable :8080/api => :3000/api
    - src/
        - components/
            - CreateRoom.vue
            - Header.vue
            - Home.vue
            - Room.vue
            - UserView.vue
        - router/
            - index.js : vue-router code
        - App.vue : root vue component
        - main.js : root vue code
    - index.html : root html including `<head></head>`
    - package.json : include code dependencies
