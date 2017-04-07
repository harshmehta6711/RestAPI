/**
 * http://usejsdoc.org/
 */

exports.makeCalculation=function(req,res){
	//var math = require('/mathjs');
	console.log("in");
	var x=req.param("exampleInputName2");
	//console.log(req.data.status);
	console.log(x);
	//evaluate(x);
	console.log(eval(x));
	var result=eval(x);
	//res.write(result);
	res.render('CalDisp',{title:result});
	
	//var ans=math.eval(x);
	//console.log(ans);
		
};


