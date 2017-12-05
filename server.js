// get dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');


//get your api routes
const api = require('./server/routes/api');

const tasks = require('./server/routes/tasks');

//set app
const app = express();

//parsers for post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// point static route to dist
app.use(express.static(path.join(__dirname,'dist')));

//set aapp api
app.use('/api',api);
app.use('/tasks',tasks);

//send mail

app.post('/sendmail',(req, res) =>{
 const output = `
<p> You have a new contact request</p>
<h3></h3>
<ul>
<li>Name : ${req.body.name}</li>
<li>Name : ${req.body.company}</li>
<li>Name : ${req.body.email}</li>
<li>Name : ${req.body.phone}</li>

</ul>
<p>${req.body.message}</p>
 `;

 // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'sumanmr9591@gmail.com', // generated ethereal user
            pass: '$uMan123'  // generated ethereal password
        },
        tls:{
        	rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nodemailer Contact" <sumanmr9591@gmail.com>', // sender address
        to: 'suman.123.msd@gmail.com', // list of receivers
        subject: 'Node contact Request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.send("mail sent");
        /*res.render('contact', {msg:'Email has been sent'});*/
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });


});

//point other routes and return index.html
app.get('*',(req,res)=>{
   res.sendFile(path.join(__dirname,'dist/index.html'));
});

//set port
const port = '3000';
app.set('port',port);


//initialize server
const server = http.createServer(app);

//listen to server
server.listen(port, ()=>{
    console.log('Server is running on 3000');
});

