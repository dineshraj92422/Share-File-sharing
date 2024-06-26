const router = require('express').Router();

const { error } = require('console');
const multer = require('multer');
const path = require('path')
const File = require('../models/file')
const {v4: uuid4} = require('uuid');
const { send } = require('process');


let storage = multer.diskStorage({
    destination: (req, file , cb) => cb(null,'upload/'),
    filename:(req,file,cb) =>{
        const uniqueName = `${Date.now()}-${Math.round(Math.random() *1E9)}${path.extname(file.originalname)}`;
        cb(null,uniqueName);
    }
})




let upload = multer({
    storage,
    limits: {
        fileSize:1000000 *100
    }
}).single('myfile');

router.post('/',(req,res)=>{

 



    //Store File
    upload(req,res,async(err)=>{
           //validate data
           
        if(!req.file){
            return res.json({error:"Corrupt File"});
        }


        if(err){
            return res.status(500).send({error:err.message})
        }

         //Store into DB

         const file = new File({
            filename:req.file.filename,
            uuid : uuid4(),
            path:req.file.path,
            size:req.file.size
         });

         const response = await file.save();
         return res.json({file:`${process.env.APP_BASE_URL}/files/${response.uuid}`})

    })

})


 //Send EMAIL

 router.post('/send', async(req,res)=>{

   

    const {uuid ,emailTo ,emailFrom } = req.body;

    if(!uuid || !emailTo || !emailFrom){
        return res.status(422).send({error:"All feilds required"});
    }

    // Get Data from database

    const file = await File.findOne({uuid:uuid});

    // if(file.sender){
    //     return res.status(422).send({error:"All send "});

    // }

    file.sender = emailFrom;
    file.receiver = emailTo;

    const response = await file.save();

    // send Email

    const sendMail = require('../services/emailService')
    let mail=require('../services/emailTemplate')
    sendMail({
        from:emailFrom,
        to: emailTo,
        subject:"Inshare file Sharing",
        text: `${emailFrom} Shared a File with you`,
        html:   mail ({
            from:emailFrom,
            downloadLink:`${process.env.APP_BASE_URL}/files/${uuid}`,
            size: parseInt(file.size/1000)+ 'KB',
            expires:'24 hours'
        })
    });


    return res.send({success: true})

 })








module.exports =router;