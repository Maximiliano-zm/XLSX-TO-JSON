import express from 'express'
import dataRouter from './routes/data'

const app = express()

app.use(express.json())
const PORT = 3000

app.get('/ping' , (_req , res)=>{
    console.log(('test terminal visual'))
    res.send('prueba')
})

app.use('/api/data' , dataRouter)


app.listen(PORT,()=>{
    console.log(`http://ec2-18-228-196-89.sa-east-1.compute.amazonaws.com:${PORT}/api/data`);
})