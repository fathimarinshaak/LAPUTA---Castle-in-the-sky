const games = require("../model/games")

exports.getGames = (req,res)=>{
    return res.render('gameslist',{games})
}

exports.getChibiandChu = (req,res)=>{
    return res.render('games/chibiandchu')
}

exports.getKikisDeliveryservice =(req,res)=>{
    return res.render('games/kikisdeliveryservice')
}

exports.getCatchTheSoots =(req,res)=>{
    return res.render('games/catchtheSoots')
}