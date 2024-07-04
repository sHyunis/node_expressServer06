const { Sequelize, DataTypes } = require('sequelize');

// define : table 제작
// table의 이름을 단수로 만든다, 단수 정의하면, 데이터베이스에서는 Users
const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  },
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true