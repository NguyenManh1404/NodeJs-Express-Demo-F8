const Course = require('../models/Course');//import model


class SiteController{
    index(req,res){
        // res.json({
        //     name:"demo"
        // });
        Course.find({},function(err, course){
            if(!err){
                res.json(course)
            }else{
                res.status(400).json({error:"ERROR!!!"})
            }
        })
    }
    search(req,res){
        res.render('search');
    }
}
module.exports= new SiteController;