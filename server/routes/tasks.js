//get dependencies
const express = require('express');
const mongojs = require('mongojs');
const router = express.Router();
const db = mongojs('mongodb://suman:suman@ds137054.mlab.com:37054/mypersonaldbsuman');

//get all data
router.get('/task',function(req,res,next){
   db.tasks.find(function(err,tasks){
     if(err){
     	res.send(err);
     }
     res.json(tasks);
   })
});

//get single data
router.get('/task/:id',function(req,res,next){
 db.tasks.findOne({_id:mongojs.objectId(req.params.id)},function(err,task){
 	if(err){
 		res.send(err);
 	}
 	res.json(task);
 })
});


//add data
router.post('/task', function(req,res,next){
  var task = req.body;
  db.tasks.save(task, function(err,task){
  	if(err){
  		res.send(err);
  	}
  	res.json(task);
  })
});

//delete data
router.delete('/task/:id',function(req,res,next){
   db.taks.remove({_id:mongojs.objectId(req.params.id)},function(err,task){
     if(err){
     	res.send(err);
     }
     res.json(task);
   });
});

//update data
router.put('/task/:id',function(req,res){
    var task = req.body;
    var updTask = {};
    if(task.isDead){
    	updTask.isDead = task.isDead;
    } 
    if(task.title){
    	updTask.title = task.title;
    }
    if(!updTask){
    	res.status(400);
    	res.json({
    		"error":"ad data"
    	});
    }else{
    	db.tasks.update({_id:mongojs.objectId(req.params.id)},updTask,{},function(err,task){
    		if(err){
    			ressend(err);
    		}
    		res.json(task);
    	})
    }
});

module.exports = router;