
import { useState } from 'react';
import './App.css';

function App() {
  const [calc ,setCalc] = useState("");
  console.log(calc);
  const [results,setResults] = useState("");
  console.log(results);

  const ops= ['/','*','+','-']

  const UpdateCalc= value =>{
  if(
    (ops.includes(value) && calc ==='') || 
    (ops.includes(value) && ops.includes(calc.slice(-1)))
  )
  {
    // setCalc(calc.slice(0,-1) + value)
    console.log(ops.includes(value));
    return ;
    
  }
  setCalc(calc + value);
  console.log(calc);
  if(!ops.includes(value)){
    //imp 
    setResults(eval(calc + value).toString());
    console.log(eval(calc + value).toString());
    

  }
  
}

  const createDigits = () =>{
    const digit = [];
    for(let i=1;i<10;i++)
    {
      digit.push(
        <button  onClick={()=>UpdateCalc(i.toString())} key={i}>{i}</button>
      )
    }
    return digit;
  }

  const calculator = () =>{
    setCalc(eval(calc).toString());
  }
  const DeleteValue = () =>{
    if(calc === '')
    {
      return ;
    }
    const value  = calc.slice(0,-1)
    setCalc(value);
   
  }


  return (
    <div className="App">
      <div className="calculator">
      <div className='display'>
       { results ?<span>{results}</span>:''}{calc || "0"}
      </div>
      <div className="operators">
        <button onClick={()=>{UpdateCalc('*')}}>*</button>
        <button onClick={()=>{UpdateCalc('/')}}>/</button>
        <button onClick={()=>{UpdateCalc('+')}}>+</button>
        <button  onClick={()=>{UpdateCalc('-')}}>-</button>
        <button onClick={DeleteValue}>DEL</button>
      </div>
      <div className='digits'>
        {createDigits()}
        <button onClick={()=>{UpdateCalc('0')}}>0</button>
        <button onClick={()=>{UpdateCalc('.')}}>.</button>
        <button onClick={calculator}>=</button>
      </div>
      </div>

    </div>
  );
}

export default App;
