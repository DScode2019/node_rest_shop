const Product = require('../models/product');

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;

    Product.findByPk(prodId)
        .then(product => {
            //console.log("fffff"+product)

            res.json({prod:product});
        })
        .catch(err => console.log(err));
};
