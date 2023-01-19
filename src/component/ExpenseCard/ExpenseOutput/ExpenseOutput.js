import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./ExpenseOutput.css";

const ExpenseOutput = (props) => {

  let MyData=[
    {
        id:1,
        title:'School',
        Amount:400,
        date:new Date()
    },
    {
        id:2,
        title:'House',
        Amount:1000,
        date:new Date()
    },
]
const [expdata,setExpdata]=useState(MyData)
const GetAllData=(NewObj)=>{
    const NewArr=[NewObj, ...expdata]
    setExpdata(NewArr);
}
  return (
    <>
    <div className="tag">
        <h1>Welcome to To-Do List 😎</h1>
    </div>
    <ExpenseForm AllData={GetAllData} />
    <div className="Container">
      <div className="Bigger">
        { expdata.map((value) => (
          <div className="Items" key={value.id}>
            <div className="content">
              <div className="date">
                <h3 >{value.date.toLocaleString("en-US", { month: "long" })}</h3>
                <h4>{value.date.getFullYear()}</h4>
                <h2 >
                  {value.date.toLocaleString("en-US", { day: "2-digit" })}
                </h2>
              </div>
              <h1>{value.title}</h1>
              <div className="Price">
                <div className="manage">
                  <h2> ${value.Amount}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};
export default ExpenseOutput;
