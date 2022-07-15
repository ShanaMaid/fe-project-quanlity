const Koa = require('koa');
const React = require('react');
const { renderToString  } = require('react-dom/server')

const app = new Koa();

class Compoent extends React.Component {
  render() {
    return React.createElement('div', {
      style: {
        fontSize: 40,
      },
    }, '服务端渲染成功');
  }
}

app.use((ctx) => {
  ctx.body = renderToString(React.createElement(Compoent));
});

app.listen(3000);