# [CS496_Week5]
## Project Name: 
### Team: [jihoon ko](https://github.com/jihoon-ko), [SeungMin Lee](https://github.com/iamlsm97)

## 1. frontend
- Vue.js, vue-socket.io, Material Design
- Code dependencies
    - vue, vue-router,
    - vuex, vuex-router-sync,
    - axios, vue-axios,
    - socket.io-client, vue-socket.io,
    - material-design-lite

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
- Node.JS, mongoDB, socket.io
- Code dependencies: express, mongoose, socket.io
- Server host: http://localhost:3000 default

Install dependencies:
```bash
$ npm install
```
Run server:
```bash
$ npm start
```

### RESTful API
- GET /


## 3. Code Structure

- backend/
    - bin/
        - www : server code with socket.io
    - models/
        - schema.js : mongoDB Schema
    - routes/
        - api.js : response to RESTful API
        - index.js
    - views/
        - index.jade
    - app.js: main JavaScript Server code
    - package.json : include code dependencies
   
- frontend/
    - config/
        - index.js : proxyTable :8080/api => :3000/api
    - src/
        - components/
            - .vue : 
        - router/
            - index.js : vue-router code
        - store/
            - index.js : vuex code
        - App.vue : root vue component
        - main.js : root vue code
    - static/
        - cards/ 
        - egypt.jpg 
        - typo.png 
    - index.html : root html including `<head></head>`
    - package.json : include code dependencies
