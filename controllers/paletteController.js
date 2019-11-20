const Palette = require('../models/palette');


exports.getPalette = (req, res, next) => {
    const paletteId = req.params.id_palette

    Palette.findByPk(paletteId)
        .then(palette => {
            //console.log("fffff"+product)

            res.json({palette:palette});
        })
        .catch(err => console.log(err));
};
exports.postPalette=(req,res,next) =>{
    const code =req.body.code_palette;
    const poids =req.body.poids;
    const nombre=req.body.nombre;

        const new_Palette = req.body;
        console.log("gppp "+code+"eee  "+poids)
  //  new_Palette.code_palette="123";
   // new_Palette.nombre=1;
   // new_Palette.poids=10;

           res.json({ code_palette: 'pallete created!' +code});






}