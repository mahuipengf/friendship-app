const express = require('express');
const app = express();

app.use('/public', express.static(__dirname + 'public'));
app.use(express.json());
app.use('/api', require('./routers'));
app.use(express.static(__dirname + '/project/dist'));
app.get('/', (req, res) => {
    // res.send('Hello World');
    // 注意运行前端打包后的文件
    res.sendFile(__dirname + '/project/dist/index.html')
});




app.listen(3030, () => {
    console.log('serve address http://127.0.0.1:3030')
});