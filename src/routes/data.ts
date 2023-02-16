import express from 'express' 

import DATA from '../services/dataServices';

const router = express.Router()

router.get('/',(_req ,res) =>{
    // res.send()
    res.send(DATA)
})

export default router