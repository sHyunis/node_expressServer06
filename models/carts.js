// table 만들기
// create table
module.exports = (sequelize, DataTypes)=>{
    // cart => 실제 만들어질때는 carts
    const Cart = sequelize.define('cart', {
        user_name : {
            type : DataTypes.STRING(20),
            allowNull : false //not null
        },
        user_id : {
            type : DataTypes.STRING(20),
            allowNull : false //not null
        },
        product_id : {
            type : DataTypes.STRING(20),
            allowNull : false //not null
        },
        amount : {
            type : DataTypes.INTEGER,
            allowNull : false //not null
        },
        price : {
            type : DataTypes.INTEGER,
            allowNull : false //not null
        }
    },{
        timestamps : true, // 데이터 베이스 만들때 언제 만들어졌나 기록
        paranoid: true, //지운날짜
        deletedAt: 'deletedAt'
    });
    return Cart;
}