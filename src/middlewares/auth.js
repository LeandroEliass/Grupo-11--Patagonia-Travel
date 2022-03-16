const auth = (req,res,next)=> req.session && req.session.user ? req.session.user.admin ? next() : res.redirect("/users/login") : res.redirect("/users/login")



module.exports= auth