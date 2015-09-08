/**
 * Created by snow on 2015/9/8.
 */
var express = require('express');
var router = express.Router();
var io= require('socket.io');

/* GET home page. */
router.get('/', function(req, res, next) {
    // 创建一个Socket.IO实例，把它传递给服务器
    var socket= io.listen(server);

// 添加一个连接监听器
    socket.on('connection', function(client){

        // 成功！现在开始监听接收到的消息
        client.on('message',function(event){
            console.log('Received message from client!',event);
        });
        client.on('disconnect',function(){
            clearInterval(interval);
            console.log('Server has disconnected');
        });
    });
    res.render('index', { title: 'Express' });
});


module.exports = router;


