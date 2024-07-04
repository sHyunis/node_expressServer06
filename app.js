const express = require('express');
const app = express(); 
const logEvents = require('./middleware/logEvents'); 
const dotenv = require('dotenv');
dotenv.config();


/* 포트 설정 */
app.set('port', process.env.PORT || 3000);

/* 공통 미들웨어 */ 
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // qs, queryString


app.use((req, res, next)=>{
    console.log( Date.now(), req.method, req.url );
    logEvents(`${req.method}, ${req.url}`)
    // logger 삽입
    next();
})

// app.use('/', require('./routes/root')); // .js 생략가능
app.use('/users', require('./routes/users')); // .js 생략가능
app.use('/carts', require('./routes/carts')); // .js 생략가능


 
app.use((err, req, res, next)=>{
    console.error( err.message );
    res.send('잠시 후 다시 접속해주세요')
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중 ..')
});