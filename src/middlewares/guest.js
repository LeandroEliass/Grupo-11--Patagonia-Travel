function guest(req, res, next){
    if(req.session.user){
        return res.redirect("/users/profile")
    }
    next()
}

module.exports = guest