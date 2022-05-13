const router = require('express').Router()
const Group = require('../models/Group.model')
const Eater = require('../models/Eater.model')
// const Restaurant = require('../models/Restaurant.model')


router.post('/create_groups', (req, res, next) => {

    let eatersArr = []
    let tables
    let teamLeader = 'popino'
    let lastWeekGroup = []
    let lastWeekCuisine
    
    Eater
        .find()
        .then(allEaters => {
            if (allEaters.length <= 7) {
                console.log('hola1', teamLeader)
                for (let i = 0; i < allEaters.length; i++) {
                    console.log('hola2', teamLeader)
                    if (allEaters[i].wasLeader == false && teamLeader=='popino') {
                        teamLeader = allEaters[i]._id
                        // allEaters[i].wasLeader=true
                        Eater
                            .findByIdAndUpdate(allEaters[i]._id, { wasLeader: true })
                    } else if (teamLeader != allEaters[i]._id){
                        Eater
                            .findByIdAndUpdate(allEaters[i]._id, { wasLeader: false })
                    } else if ((allEaters[i].wasLeader == true && allEaters[i]._id)){
                        Eater
                            .findByIdAndUpdate(allEaters[i]._id, { wasLeader: false })
                    }
                }
                teamLeader == 'popino'
    Group
        .create({ leader: teamLeader, eaters: allEaters })
        .then(response => {
            res.json(response)
        })
        .catch(err => res.status(500).json(err))
} else {
    let aux= 7
    let evenTablesCounter = 0
    let unevenTablesCounter = 0
                    while(aux> 3) {
    if (allEaters.length % aux == 0) {
        tables = (allEaters.length / aux)
        for (let j = 0; j < tables; j++) {
            eatersArr.length = 0
            for (let k = 0; k < aux; k++) {
                eatersArr.push(allEaters[k])
// LEADEEEEEEEEEEEEEEEEEER
            }
            for (let k = 0; k < aux; k++) {
                allEaters.splice(k, 1)
            }
            Group
                .create({ eaters: eatersArr })
                .then(group => {
                    console.log(group)
                })
                .catch(err => res.status(500).json(err))
        }
        Group
            .find()
            .then(response => {
                console.log(response)
                res.json(response)
            })
            .catch(err => res.status(500).json(err))
        aux--
    } else {
        aux = 4
        tables = Math.ceil(allEaters.length / 7)
        let proportion = allEaters.length / tables
        eatersSup = Math.floor(proportion)
        eatersSub = Math.ceil(proportion)
        //eatersSub y eatersSup son n eaters y n+1 eaters por mesa respectivamente, hay casos que cuando no todas las mesas son iguales, queden mesas de una unidad por encima o por debajo, de ahi sale sub y sup
        tablesSub = Math.round(((proportion) - Math.floor(proportion)) * tables)
        //tablesSub es la forma de delimitar hasta que posición del array pasamos eatersSub y empezamos a pasar eatersSup
        console.log('tables', tables)
        console.log('proportion', proportion)
        console.log('eatersSup', eatersSup)
        console.log('eatersSub', eatersSub)
        console.log('tablesSub', tablesSub)
        let counterFirst = 0
        let counterSecond = tablesSub
        console.log('counterFirst', counterFirst)
        console.log('counterSecond', counterSecond)
        while (counterFirst < tablesSub) {
            console.log('-------------------------------------', eatersArr)
            eatersArr.length = 0
            for (let k = 0; k < eatersSub; k++) {
                eatersArr.push(allEaters[k])
            }
            console.log(eatersArr)
            for (let k = 0; k < eatersSub; k++) {
                allEaters.splice(k, 1)
            }
            console.log(eatersArr)
            Group
                .create({ eaters: eatersArr })
                .then(group => {
                    console.log(group)
                })
                .catch(err => res.status(500).json(err))
            counterFirst++
        }

        while (counterSecond < tables) {
            eatersArr.length = 0
            for (let k = 0; k < eatersSup; k++) {
                eatersArr.push(allEaters[k])
            }
            for (let k = 0; k < eatersSup; k++) {
                allEaters.splice(k, 1)
            }
            Group
                .create({ eaters: eatersArr })
                .then(group => {
                    console.log(group)
                })
                .catch(err => res.status(500).json(err))
            counterSecond++
        }
        Group
            .find()
            .then(response => {
                res.json(response)
            })
            .catch(err => res.status(500).json(err))
        aux = 3
    }
}
        }
        })
        .catch (err => res.status(500).json(err))
})
module.exports = router