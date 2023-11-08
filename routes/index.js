var express = require('express');
var router = express.Router();
const masseges = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { masseges: masseges });
});
router.get('/new',(req,res)=>{
  res.render('new')
})
router.post('/new',(req,res)=>{
  
  masseges.push({
    text: req.body.massege,
    user: req.body.name,
    added: new Date()
  })
  res.redirect('/')})
module.exports = router;
