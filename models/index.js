'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

// db에 접속할 수 있는 환경 설정
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db 연결하는 코드 넣기
// db.Cart = function(sequelize, Sequelize)
db.Cart = require('./carts')(sequelize, Sequelize)// 소문자는 환경 설정, 대문자는 시퀄라이즈 객체(번역해주는 객체)
// db.Users = require('./carts')(sequelize, Sequelize)
// db.Products = require('./carts')(sequelize, Sequelize)
// 즉시실행함수()() => HOC = high order component

module.exports = db;
