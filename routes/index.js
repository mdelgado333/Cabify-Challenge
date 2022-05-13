module.exports = app => {
    const eaterRoutes = require('./eaters.routes')
    app.use("/eaters", eaterRoutes)

    const groupsRoutes = require('./groups.routes')
    app.use("/groups", groupsRoutes)

    const restaurantsRoutes = require('./restaurants.routes')
    app.use("/restaurants", restaurantsRoutes)
}