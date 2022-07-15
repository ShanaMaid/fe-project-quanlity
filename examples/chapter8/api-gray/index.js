const Koa = require('koa');
const proxy = require('koa-proxy');

// 模拟流量入口的还会读分流
const entry = new Koa();
entry.use(async (ctx, next) => {
  // 用 ctx.query.isGray 来模拟灰度标识
  const { isGray } = ctx.query;
  let host = 'http://localhost:8000';
  if (isGray) {
    host = 'http://localhost:8001';
  }
  const fn = proxy({
    host,
  });
  await fn(ctx, next);
});

entry.listen(3000);

// 正常实例
const normal = new Koa();
normal.use((ctx) => {
  ctx.body = {
    name: 'Tom Jerry',
  };
});
normal.listen(8000);

// 灰度实例
const gray = new Koa();
gray.use((ctx) => {
  ctx.body = {
    name: 'Tom Jerry',
    age: 18,
  };
});
gray.listen(8001);