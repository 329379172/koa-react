const Koa = require('koa');
const app = new Koa();
const koaLog = require('koa-log');
const Router = require('koa-router');
const router = new Router();
const fs = require('fs');
const serve = require('koa-static');

const testRouter = require('./routers/test');
const userRouter = require('./routers/user');
const apiRouter = require('./routers/api');

app.use(koaLog('dev'));

app.use(testRouter.routes()).use(testRouter.allowedMethods());
app.use(userRouter.routes()).use(userRouter.allowedMethods());
app.use(apiRouter.routes()).use(apiRouter.allowedMethods());

app.use(serve(__dirname + '/../public/dist'), {index: 'index.html'});

app.listen(3000);