const router = require('express').Router();
<<<<<<< HEAD
const File = require('../models/file');

router.get('/:uuid', async (req, res) => {
   // Extract link and get file from storage send download stream 
   const file = await File.findOne({ uuid: req.params.uuid });
   // Link expired
   if(!file) {
        return res.render('download', { error: 'Link has been expired.'});
   } 
   const response = await file.save();
   const filePath = `${__dirname}/../${file.path}`;
   res.download(filePath);
});


module.exports = router;
=======

const File = require('../models/file')



router.get('/:uuid', async(req,res)=>{
    const file = await File.findOne({ uuid: req.params.uuid});
    if(!file){
        return res.render('download', {error :" Link has been Expired"});
        console.log("hello")

    }

    const filePath = `${__dirname}/../${file.path}`;
    // console.log(filePath)
    res.download(filePath)
})

module.exports =router;
>>>>>>> 013b445da16804ad842a5cde2568923670bb9a97
