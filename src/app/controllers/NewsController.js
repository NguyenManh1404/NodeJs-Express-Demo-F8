class NewsController{
    index(req,res){
        res.render('news');
    }
    newHot(req,res){
        res.render('news-hot');
    }
}
module.exports= new NewsController;