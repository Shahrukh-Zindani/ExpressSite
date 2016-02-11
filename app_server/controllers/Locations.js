module.exports.homelist= function(req,res){
	res.render('index',{title:'Home'});
};

module.exports.locationInfo= function(req,res){
	res.render('index',{title:'Locations Info'});
};

module.exports.locationReview= function(req,res){
	res.render('index',{title:'Locations Review'});
};