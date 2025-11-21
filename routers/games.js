const { getChibiandChu, getKikisDeliveryservice, getGames, getCatchTheSoots } = require('../controllers/games')

const router = require('express').Router()
 
router
    .route('/')
    .get(getGames)

router
    .route('/chibiandchu')
    .get(getChibiandChu)

router
    .route('/kikisdeliveryservice')
    .get(getKikisDeliveryservice)

router
    .route('/catchtheSoots')
    .get(getCatchTheSoots)

module.exports = router