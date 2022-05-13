const router = require('express').Router()
const Eater = require('../models/Eater.model')
const Restaurant = require('../models/Restaurant.model')

router.post('/', (req, res, next) => {

    const { name, email, lastGroup, lastCuisine, hasAllergies, hasIntolerances} = req.body

    Eater
        .create({ name, email, lastGroup, lastCuisine, hasAllergies, hasIntolerances})
        .then(() => {
            res.status(200).json()
        })
        .catch(err => res.status(500).json(err))
})

router.get('/', (req, res, next) => {

    Eater
        .find()
        .then((response) => {
            res.json(response)
        })
        .catch(err => res.status(500).json(err))
})

router.delete('/', (req, res, next) => {
    const promises = [
        Eater.deleteMany(),
        Restaurant.deleteMany()
    ]

    Promise
        .all(promises)
        .then(() => {
            res.status(200).json('eaters and restaurants removed')
        })
        .catch(err => res.status(500).json(err))
})

module.exports = router