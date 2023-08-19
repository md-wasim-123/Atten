import express from 'express'
const router = express.Router();
import student from '../controller/homeController.js';
 
router.get('/', student.homeController)
router.get('/home', student.getAllData) 
router.get('/registration', student.registrationDoc)
router.post('/registration', student.createDoc)
router.get('/login', student.login)
router.post('/login', student.verifLogin)
//Student Router


export default router
