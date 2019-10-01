const express = require ('express')
const multer = require ('multer')

const UploadComfig = require('./config/Upload')
const SessionController = require('./controllers/SessionController')
const spotController = require('./controllers/Spotcontroller')
const Deshbordcontroller = require('./controllers/Deshbordcontroller')
const BookingController = require('./controllers/BookingController')

const Upload = multer(UploadComfig)
const routes = express.Router();

routes.post('/spots/:spot_id/Booking',BookingController.store);

routes.get('/Deshbord', Deshbordcontroller.Show);

routes.get('/spots', spotController.index);

routes.post('/Sessions', SessionController.store);

routes.post('/spots', Upload.single('tumbnail') , spotController.Storage);

module.exports = routes;
