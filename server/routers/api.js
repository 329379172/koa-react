const Router = require('koa-router');

const router = new Router({
    prefix: '/api'
});

router.get('/home', ctx => {
    ctx.body = {
        topImg: 'https://cdn.longdai.com/forum/20161031/head2.png'
    };
});

module.exports = router;