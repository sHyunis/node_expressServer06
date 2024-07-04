const models = require('../models') // models속 index.js 가져옴

const getCarts = async (req, res) => {
    try {
        const carts = await models.Cart.findAll();
        // select * from carts;
        res.send(carts);
    } catch (err) {
        console.log('err');
    }
}
const createCart = async (req, res) => {
    const {user_name, user_id, product_id, amount, price} = req.body;
    try {
        const carts = await models.Cart.create({
            user_name, user_id, product_id, amount, price
        });
        // insert into;
        console.log('created ... ');
        res.send('created ... ');
    } catch (err) {
        console.log(err);
    }

}
const deleteCart = async (req, res) => {
    const {user_id, product_id} = req.body;
    try {
        const carts = await models.Cart.destroy({
            where : {
                user_id, product_id //둘이 같을때 조건
            } //조건
        });
        // 연결해주는 것을 맵핑이라고 함
        console.log('deleted ... ');
        res.send('deleted ... ');
    } catch (err) {
        console.log(err);
    }
}
const updateCart = async (req, res) => {
    const {user_id, product_id, amount, price} = req.body;
    try {
        const carts = await models.Cart.update({
            amount, price //대상
        },{
            where : {
                user_id, product_id //둘이 같을때 조건
            } //조건
        });
        //Executing (default): UPDATE `carts` SET `amount`=?,`price`=?,`updatedAt`=? WHERE (`deletedAt` IS NULL AND (`user_id` = ? AND `product_id` = ?))
        // insert into;
        // 연결해주는 것을 맵핑이라고 함
        console.log('updated ... ');
        res.send('updated ... ');
    } catch (err) {
        console.log(err);
    }
}
const getParamCart = async (req, res) => {
    res.send('getParamCart')
}


module.exports = {
    getCarts,
    createCart,
    deleteCart,
    updateCart,
    getParamCart
}