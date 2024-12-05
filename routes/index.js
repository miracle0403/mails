var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const path = require('path');


function sendmail(body){
	(async () => {
		const { default: hbs } = await import('nodemailer-express-handlebars');
		//send mail
		var transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: "miracle.lawrence43@gmail.com",
				pass: 'dklq htkb kcce drha',
			},
		});
		
		
		// Step 2: Configure Handlebars as the template engine
		transporter.use('compile', hbs({
				viewEngine: {
					extName: '.hbs',
					defaultLayout: false, // No default layout since we're not using partials
				},
				viewPath: path.join(__dirname, '../views'), // Path to the templates
				extName: '.hbs', // Template file extension
			})
		);

		const mail = {
		   from: 'offer@miraclelawrence',
		   to: body.email,
		   subject: 'Get A Professional Website for only $250!',
		   template: 'email1',
		   context: {
			   name: body.name,
			   company: body.company
		   }
		}
		
		try {
			const info = await transporter.sendMail(mail);
			console.log('Email sent: ', info.response);
		} catch (error) {
			console.error('Error sending email: ', error);
		}
	})();
}




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* send proposal */
router.post('/send-prop', function(req, res, next) {
  var details = req.body
  sendmail(details);  
  res.render('index', { title: 'Sent' });
});

module.exports = router;
