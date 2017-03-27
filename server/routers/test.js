const Router = require('koa-router');

const router = new Router({
    prefix: '/test'
});

router.get('/', ctx => {
    ctx.body = 'all test';
});


router.get('/:id', ctx => {
    ctx.body = 'this test id = ' + ctx.params.id;
});

module.exports = router;