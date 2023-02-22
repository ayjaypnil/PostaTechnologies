// Require Express for routing
var express = require("express");
var app = express();

// Defining local port or assigned port when deployed
var PORT = process.env.PORT || 3000;

// Require EJS for templating
var ejs = require("ejs");
// Templating engine will look to views folder
app.set("view engine", "ejs");
// Serving up everything in the public folder
app.use(express.static("public"));

// Body Parser
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Post Route for Email submission from Contact Page
app.post("/contactemail", urlencodedParser, function (req, res) {
    console.log(req.body.email);
    console.log(req.body.subject);
    console.log(req.body.message);
    const msg = {
        to: "support@postatechnologies.com",
        from: req.body.email,
        subject: req.body.subject,
        text: req.body.message,
        html: "<p> From: " + req.body.name + "; " + req.body.message + "</p>"
    };
    sgMail.send(msg, (error, result) => {
        if (error) {
            //Do something with the error
            console.log(error);
            res.redirect("/");
        } else {
            // Redirect after contact submission
            res.redirect("/");
        }
    });
});


// Route to Home
app.get("/", function (req, res) {
    res.render(__dirname + "/views/home.ejs");
});

// Route to Mobile App Page
app.get("/mobileapp", function (req, res) {
    res.render(__dirname + "/views/mobileApp.ejs");
});

// Route to Market(CHICAGO) Page
app.get("/market-chicago", function (req, res) {
    res.render(__dirname + "/views/marketChicago.ejs");
});

// Route to Posta Partners Page
app.get("/postapartners", function (req, res) {
    res.render(__dirname + "/views/postaPartnersHome.ejs");
});

// Route to Posta For Business/Business Solutions Page
app.get("/posta-business-solutions", function (req, res) {
    res.render(__dirname + "/views/postaForBusiness.ejs");
});

// Route to Terms Page
app.get("/user-terms", function (req, res) {
    res.render(__dirname + "/views/userTerms.ejs");
});

// Route to Posta Partner Terms Page
app.get("/partner-terms", function (req, res) {
    res.render(__dirname + "/views/partnerTerms.ejs");
});

// Route to About Posta Page
app.get("/about-posta", function (req, res) {
    res.render(__dirname + "/views/aboutPostaV2.ejs");
});

// Route to Contact Page
app.get("/contact-posta", function (req, res) {
    res.render(__dirname + "/views/contact.ejs");
});

// Route to Customer Support Center
app.get("/customer-support", function (req, res) {
    res.render(__dirname + "/views/customerSupport.ejs");
});

// Route to Customer Support Center
app.get("/user-terms1", function (req, res) {
    res.render(__dirname + "/views/userTermsv2.ejs");
});
// Route to Customer Support Center
app.get("/privacy-policy1", function (req, res) {
    res.render(__dirname + "/views/privacyPolicyv2.ejs");
});

// Route to Customer Support Center
app.get("/sample", function (req, res) {
    res.render(__dirname + "/views/samplepage.ejs");
});

// Route to Customer Support Page
app.get("/support", function (req, res) {
    res.render(__dirname + "/views/Supportv2.ejs");
});

// Route to Posta Partner Support Page
app.get("/partner-support", function (req, res) {
    res.render(__dirname + "/views/partnerSupportv2.ejs");
});

// App is listening on local 5000 or assigned port
app.listen(PORT, function (err) {
    if (err) throw err;
    console.log("Posta Landing Page Initializing...  (" + PORT + ")");
});