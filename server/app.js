const Koa = require('koa');
const app = new Koa();
const koaLog = require('koa-log');
const Router = require('koa-router');
const router = new Router();

const testRouter = require('./routers/test');
const userRouter = require('./routers/user');

app.use(koaLog('dev'));

app.use(testRouter.routes()).use(testRouter.allowedMethods());
app.use(userRouter.routes()).use(userRouter.allowedMethods());



app.listen(3000);