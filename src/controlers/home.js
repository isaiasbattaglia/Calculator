const ctrl = {};


const LastCalc = require('../models/data');
ctrl.index = async(req, res) => {
    console.log("HOLA");
    var data = new LastCalc({ expression: "0"});
    await data.save();
    console.log(data);
    res.render('index',{data: data.expression, id:data._id});
};

ctrl.save = async (req, res) =>{
    console.log("SAVE");
    
    var exp = req.body.exp;
    const a = await LastCalc.findByIdAndUpdate( req.body.id, {expression:exp});
    console.log(a);
    res.json();
};

ctrl.last = async(req, res) =>{
    console.log('last');
    console.log(req.params.last_calc_id);
    const data = await LastCalc.findById(req.params.last_calc_id);
    console.log(data);
    res.json(data);
};

module.exports = ctrl;
