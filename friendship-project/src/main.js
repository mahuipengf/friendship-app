
// main.js 或者一个全局的JS文件
 
function setRem() {
    const baseSize = 16; // 基准大小，可以根据需要设置
    const deviceWidth = document.documentElement.clientWidth || document.body.clientWidth;
    document.documentElement.style.fontSize = (deviceWidth / baseSize) + 'px';
  }
   
  window.addEventListener('resize', setRem);