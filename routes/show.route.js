const router = require('express').Router();


const path = require('path')
const File = require('../models/file')



router.get('/:uuid',async(req,res)=>{
    try {
        const file = await File.findOne({uuid:req.params.uuid});
        if(!file){
            return res.render('download',{error: 'Link went wrong'})
        }
        return res.render('download',
        {
            uuid:file.uuid,
            fileName: file.filename,
            fileSize:file.size,
            downloadLink:`${process.env.APP_BASE_URL}/files/downloads/${file.uuid}`
           
        })

    } catch (error) {
        console.log(error.message)
        return res.render('download',{error: 'something went wrong'})
    }
}); 

module.exports = router;