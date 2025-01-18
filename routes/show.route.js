const router = require('express').Router();
<<<<<<< HEAD


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
=======
const File = require('../models/file');

router.get('/:uuid', async (req, res) => {
    try {
        const file = await File.findOne({ uuid: req.params.uuid });
        // Link expired
        if(!file) {
            return res.render('download', { error: 'Link has been expired.'});
        } 
        return res.render('download', { uuid: file.uuid, fileName: file.filename, fileSize: file.size, downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}` });
    } catch(err) {
        return res.render('download', { error: 'Something went wrong.'});
    }
});


module.exports = router;
>>>>>>> 013b445da16804ad842a5cde2568923670bb9a97
