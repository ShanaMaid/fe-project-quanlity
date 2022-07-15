const Koa = require('koa');
const send = require('koa-send');
const http = require("http-server");
const app = new Koa();

// 模拟流量入口的还会读分流
app.use(async (ctx) => {
  const { isGray } = ctx.query;
  let pageEntry = 'index.html'
  if (isGray) {
    pageEntry = 'index-gray.html';
  }
  await send(ctx, pageEntry, {
    root: __dirname,
  });
})

app.listen(3000);

// 模拟静态资源托管在 CDN 上的情况
const httpServer = require('http-server');
httpServer.createServer().listen(8081);