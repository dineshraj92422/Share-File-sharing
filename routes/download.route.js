const router = require('express').Router();

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