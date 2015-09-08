/**
 * Created by snow on 2015/9/8.
 */
var express = require('express');
var router = express.Router();
var io= require('socket.io');

/* GET home page. */
router.get('/', function(req, res, next) {
    // ����һ��Socket.IOʵ�����������ݸ�������
    var socket= io.listen(server);

// ���һ�����Ӽ�����
    socket.on('connection', function(client){

        // �ɹ������ڿ�ʼ�������յ�����Ϣ
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


