const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
import { Request,Response } from "express"; 

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

const fibonacci = (data1:number,data2:number) => {
  return data1+data2;
}

const fibo = [0,1];

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!');
});

app.post('/', async (req:Request, res:Response) => {
  const data = await req.body;
  var result = 0;
  if (data.Number>=3 && data.Sign == "+"){
    fibo.push(fibonacci(fibo[data.Number-3],fibo[data.Number-2])); 
    result = fibo[fibo.length-1]
  }
  if (data.Sign == "-" && data.Number>=3)
    result = fibo[data.Number-3];

  if (data.Number==2||data.Number==1)
  {
    result = data.Number-1
  }
  console.log(result)
  res.json({
    "Result": result
  });
});


app.listen((8000),()=>{
  console.log('Server is running on port http://localhost:8000');
});
