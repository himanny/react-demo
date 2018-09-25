const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../server/models/item');


// GET api
router.get('/',(req, res) => {
Item.find()
.then(items => res.json(items));

});


//POST api
router.post('/',(req, res) => {
   const newItem = new Item({
       name: req.body.name
   });

   newItem.save().then(item => res.json(item));
});

//DELETE api
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
 });


 
module.exports = router;