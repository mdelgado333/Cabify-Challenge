const router = require('express').Router()
const Restaurant = require('../models/Restaurant.model')

router.post('/', (req, res, next) => {

    const { name, address, cuisine, isCeliacFriendly, isVeganFriendly } = req.body

    Restaurant
        .create({name, address, cuisine, isCeliacFriendly, isVeganFriendly})
        .then(()=>{
            res.status(200).json('created')
        })
        .catch(err => res.status(500).json(err))
})

router.get('/', (req, res, next) => {

    Restaurant
        .find()
        .then( (response) => {
            res.json(response)
        })
        .catch(err => res.status(500).json(err))
})

module.exports = router