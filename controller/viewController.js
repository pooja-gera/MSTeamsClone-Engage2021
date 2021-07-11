const{v4:uuidv4} = require('uuid');
function getHome(req,res){
    let check = false;
    if(req.name)check = true;
    res.render("index",{name:req.name, check:check})
}

function getJoin(req,res){
    res.redirect(`/${uuidv4()}`);
}

function getRoom(req,res){
    res.render('room',{roomId:req.param.room,name:req.name});
}

function getLogin(req,res){
    res.render("login")
}

function getSignup(req,res){
    res.render("signup")
}



module.exports.getHome = getHome;
module.exports.getJoin = getJoin;
module.exports.getRoom = getRoom;
module.exports.getLogin = getLogin;
module.exports.getSignup = getSignup;