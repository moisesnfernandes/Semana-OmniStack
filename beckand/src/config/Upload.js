const multer = require('multer');
const path = require('path');

module.exports = {
 storage: multer.diskStorage({
 destination: path.resolve(__dirname,'..','..','Uploads'),
 filename: (raq , file , Cb) => {
    const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext);

     Cb(null, `${name}-${Date.now()}-${ext}`)

 }
 })
};