const Router = require('koa-router');

const router = new Router({
    prefix: '/user'
});

router.get('/', ctx => {
    ctx.body = 'all users';
});


router.get('/:id', ctx => {
    ctx.body = 'this user id = ' + ctx.params.id;
});

module.exports = router;