import React,{useState} from "react";
import "./ExpenseForm.css";


const ExpenseForm = (props) => {

    const[title,setTitle]=useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const Title=(e)=>{
      setTitle(e.target.value)
    }
    const Amount=(e)=>{
      setAmount(e.target.value)
    }
    const Date=(e)=>{
      setDate(e.target.value)
    }

    const Submithandler=(event)=>{
    event.preventDefault();

    const Obj={
      title:title,
      Amount:amount,
      date: new window.Date(date)
    }
    props.AllData(Obj)
    setTitle(" ");
    setAmount(" ");
    setDate(" ");

  }
  
   
  
  return (
    <div className="Container">
      <div className="Box">
        <form onSubmit={Submithandler}>
          <div className="Box1">
            <div className="form-box">
              <label htmlFor="title">Title</label>
              <input value={title} onChange={Title} htmlFor="title" required id="title" type="text"
               placeholder=" Type Your Text here!" />
            </div>
            <div className="form-box">
              <label htmlFor="amount">Amount</label>
              <input value={amount} onChange={Amount} required htmlFor="amount" type="Number"     
              placeholder=" Type Your Amount here!" />
            </div>
          </div> 
          <br />
          <div className="form-date">
            <div className="form-box">
              <label>Date</label>
              <input value={date} required  onChange={Date} type="Date" />
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      {/* <ExpenseOutput/> */}
    </div>
    
  );
};

export default ExpenseForm;
