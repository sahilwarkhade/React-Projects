import { useEffect, useRef, useState } from "react";

const NUMBER_OF_INPUT_BOXS=5;
const App = ()=>{
  const [inputBoxs, setInputBoxs]=useState(new Array(NUMBER_OF_INPUT_BOXS).fill(""));

  const referenceArr=useRef([]);

  useEffect(()=>{
    referenceArr.current[0].focus();
  },[]);

  function handleOnChange(e,index){
    const value=e.target.value;
    if(isNaN(value))return;

    const newArr=[...inputBoxs];
    newArr[index]=value.slice(-1);
    setInputBoxs(newArr);
    value && referenceArr.current[index+1].focus();
    // console.log(referenceArr.current)
  }

  function handleBackSpace(e,index){
    if(!e.target.value && e.key==='Backspace')
      referenceArr.current[index-1].focus();
  }
  return (
    <div className="container">
      <h1>OTP INPUT</h1>
      {
        inputBoxs.map((input, index)=>{
          return (
            <input 
              key={index}
              className="box"
              value={input}
              onChange={(e)=>handleOnChange(e,index)}
              ref={(input)=>referenceArr.current[index]=input}
              onKeyDown={(e)=>handleBackSpace(e,index)}
            />
          )
        })
      }
    </div>
  )
}

export default App;

