import React, { useEffect, useState } from "react";
import axios from "axios";

const index = () => {
  const [Number, setNumber] = useState(2);
  const [Result, setResult] = useState(0);
  const path = "http://localhost:8000"
  const nextfibo = async () => {
    console.log(Number)
    const data = await axios.post(path,{
        "Number": Number,
        "Sign":"+"
    })
    setResult(data.data.Result)
}
  const beffibo = async () => {
    console.log(Number)
    const data = await axios.post(path,{
        "Number": Number,
        "Sign":"-"
    })
    setResult(data.data.Result)
}
  return (
    <div>
      <div className="bg-index">
        <label className="No">No: {Number-1}</label>
        <div>
          <button
            disabled={Number==1}
            className="A"
            onClick={() => {
              setNumber(Number-1),
              beffibo();
            }}
          >
            -
          </button>
          <label className="div-label" defaultValue={1}>
            {Result}
          </label>
          <button
            className="B"
            onClick={() => {
              setNumber(Number+1),
              nextfibo();
            }}
             >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
