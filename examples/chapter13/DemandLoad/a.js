
const button = document.createElement('button');
button.innerText = '点击';

// button.onclick = () => {
//   console.log('模拟使用 Xlsx', Xlsx);
// };

button.onclick = () => {
  import(/* webpackChunkName: "Xlsx" */ 'Xlsx').then((Xlsx) => {
    console.log('模拟使用 Xlsx', Xlsx);
  });
};

document.body.append(button)