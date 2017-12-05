const express = require('express');
const router = express.Router();

const customerData = [
        {name: 'Suman M R',age:27,qualification:"BE",designation:"Jr Software Engineer",phone:8296613767},
        {name: 'Suresh M S',age:32,qualification:"BCA",designation:"Sr Software Engineer",phone:6574562722},
        {name: 'Rahul K L',age:29,qualification:"MBA",designation:"Jr Software Engineer",phone:7677337363},
        {name: 'Pandey T G',age:28,qualification:"BE",designation:"Sr Software Engineer",phone:9086532456}
            ];
const loginData=[
{
	uname:"sumanmr9591",
	pwd: "$uMan123"
},
{
	uname:"rahul123",
	pwd: "rahul123"
},
{
	uname: "manish123",
	pwd: "manish123"
}
];             



router.get('/loginData',(req,res)=>{
	res.status(200).send(loginData);
});

router.get('/clientData',(req,res)=>{
  res.status(200).send(customerData);
});


module.exports = router;