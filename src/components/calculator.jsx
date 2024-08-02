import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custome.css';
import Display from './display';
import Button from './buttons';
import {equal, evaluate} from 'mathjs';

const Calculator = () => {
  const [Val1,setVal]=useState('');


   const arr=["0","1","2","3","4","5","6","7","8","9","+","-","*","/",".","C"];
   const buttonhandle=(btnText)=>{
    if(btnText=="C"){
      setVal("");
    
         
    }else{
      console.log(btnText);
      const val=Val1+btnText;
      setVal(val);
    }
    
   }
   const equal =()=>{
    const ans=evaluate(Val1);
    setVal(ans);
    console.log(Val1);
   }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card bg-dark text-light p-3 calci">
        <Display
        text={Val1}
        />


        <div className="d-flex flex-wrap input">
          
        <Button 
        arr={arr}
        buttonhandle={buttonhandle}
        />
          <button
            className="btn btn-primary m-1 clcbutton"
            style={{ flexBasis: 'calc(50% - 1rem)' }}
            onClick={equal}
          >
            =
          </button>
        </div>
        <p className="text-center mt-3 kushdev">kushdev</p>
      </div>
    </div>
  );
};

export default Calculator;
