const express = require('express');
const app = express();
const path = require('path');
const proPath = path.resolve('../');

app.use('/public', express.static(__dirname + 'public'));
app.use(express.json());
app.use('/api', require('./routers'));
app.use(express.static(proPath + '/friendship-project/dist'));
app.get('/', (req, res) => {
    // res.send('Hello World');
    // 注意运行前端打包后的文件
    console.log('path', path.resolve('../'));
    res.sendFile(proPath + '/friendship-project/dist/index.html')
});




app.listen(3030, () => {
    console.log('serve address http://127.0.0.1:3030')
});