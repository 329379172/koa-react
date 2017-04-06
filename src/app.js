const Koa = require('koa');
const app = new Koa();
const koaLog = require('koa-log');
const Router = require('koa-router');
const router = new Router();
const fs = require('fs');

const testRouter = require('./routers/test');
const userRouter = require('./routers/user');
const apiRouter = require('./routers/api');

app.use(koaLog('dev'));

app.use(testRouter.routes()).use(testRouter.allowedMethods());
app.use(userRouter.routes()).use(userRouter.allowedMethods());
app.use(apiRouter.routes()).use(apiRouter.allowedMethods());

app.use(ctx => {
    ctx.body = fs.readFileSync('./client/dist/index.html', {
        encoding: 'utf-8'
    });
});

app.listen(3000);