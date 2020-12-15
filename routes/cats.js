var express = require('express');
var router = express.Router();
var CatModel = require('../models/cat');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  await renderCats(res);
});

router.post('/', async function(req, res) {
  await addCat(req.body.catName, true, req.body.catAge);
  renderCats(res);
});

router.delete('/delete/:id', async function(req, res) {
  await deleteCat(req.params.id);
  res.redirect("/cats");
});

router.put('/:id' async function(req, res) {
  
})

async function renderCats(res) {
  await CatModel.find({}, function (err, docs) {
    res.render('cats', { cats: docs });
  });
}

async function addCat(catName, isLiving, catAge) {
  var cat = new CatModel;
  cat.name = catName,
  cat.living = isLiving;
  cat.age = catAge;
  await cat.save();
  console.log(catName + " added to Cats collection ")
  // kitty.save(); .then(() => console.log(catName + " added to Cats collection "));
}

async function deleteCat(id) {
  await CatModel.deleteOne({ _id: id})
}




module.exports = router;
