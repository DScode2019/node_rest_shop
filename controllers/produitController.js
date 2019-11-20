const Produit = require('../models/produit');

exports.getProduit = (req, res, next) => {
    const prodId = req.params.produitId;

    Produit.findByPk(prodId)
        .then(produit => {
            //console.log("fffff"+product)

            res.json({prod:produit});
        })
        .catch(err => console.log(err));
};