import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app:Application = express()

// use cors
app.use(cors());
// use parse
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Testing
app.get('/', (req:Request, res:Response) => {
  res.send('Working successfully')
})

export default app;