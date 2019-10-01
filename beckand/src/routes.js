const express = require ('express')
const multer = require ('multer')

const UploadComfig = require('./config/Upload')
const SessionController = require('./controllers/SessionController')
const spotController = require('./controllers/Spotcontroller')
const Deshbordcontroller = require('./controllers/Deshbordcontroller')

const Upload = multer(UploadComfig)
const routes = express.Router();

routes.get('/Deshbord', Deshbordcontroller.Show);
routes.get('/sports', spotController.index);
routes.post('/Sessions', SessionController.store);
routes.post('/sports', Upload.single('tumbnail') , spotController.Storage);

module.exports = routes;
