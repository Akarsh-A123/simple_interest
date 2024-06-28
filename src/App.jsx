import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from 'react';

function App() {
  const [principal,setPrincipal] = useState(0)
  const [rate,setRate] = useState(0)
  const [interest,setInterest] = useState(0);
  const [total,setTotal]=useState(0)
  const [isprincipal,setIsPrincipal] = useState(true);
  const [israte,setIsRate] = useState(true);
  const [isinterest,setIsInterest] = useState(true);

  const validate = (e)=>{
   const name=e.target.name;
   const value=e.target.value;
   /*console.log(name,value);
   console.log(!!value.match(/^[0-9]*$/))*/
   if(!!value.match(/^[0-9]*$/)){
    if(name=='principal'){
        setPrincipal(value)
        setIsPrincipal(true)
    }
    else if(name=='rate'){
      setRate(value)
      setIsRate(true)
    }
    else if(name=='year'){
        setInterest(value)
        setIsInterest(true)
    }
   }
   else{
    if(name=='principal'){
      setPrincipal(value)
      setIsPrincipal(false)
    }
    else if(name=='rate'){
      setRate(value)
      setIsRate(false)
    }
    else if(name=='year'){
      setInterest(value)
       setIsInterest(false)
    }
  }
  }

  const reset=()=>{
    setPrincipal(0);
    setRate(0);
    setInterest(0);
    setIsPrincipal(true);
    setIsRate(true);
    setIsInterest(true)
  }
  const calculate=(e)=>{
    /*to prevent page from refreshing*/
    e.preventDefault()
    if(principal==''||rate==''||interest==''){
      alert('Fill the form completely')
    }
    else{
      setTotal((principal*rate*interest)/100)
    }
  }

  return (
    <>
      <div className='row w-100 border  bg-dark' style={{height:'110vh'}}>
        <div className='col-md-4'></div>
        <div className='col-md-4 bg-light mt-4 d-flex flex-column align-items-center rounded'>
          <h1 className='mt-3'>Simple Interest App</h1>
          <p className='fs-5'>Calculate your simple interest Easily</p>
          <div  className="w-75 bg-success text-center px-4 shadow py-3 rounded mt-3 mb-2">
            <h1>₹ {total}</h1>
            <p className='fs-5'>Total simple interest</p>
          </div>
          <form className='form-control mt-3 h-75 border-0' onSubmit={calculate}>
            <div className='mb-3'>
            <TextField id="outlined-basic" name='principal' onChange={(e)=>validate(e)} label="₹ principal amount" variant="outlined" className='w-100' value={principal||""} />
              {!isprincipal && <p className='text-danger'>*Invalid Input</p>}
            </div>
            <div className='mb-2'>
            <TextField id="outlined-basic" name='rate' onChange={(e)=>validate(e)} label="Rate of interest (p.a)%" variant="outlined" className='w-100' value={rate||""}/>
            {!israte&&<p className='text-danger'>*Invalid Input</p>}
            </div>
            <div className='mb-2'>
            <TextField id="outlined-basic" name='year' onChange={(e)=>validate(e)} label="year (yr)" variant="outlined" className='w-100' value={interest||""} />
            {!isinterest&&<p className='text-danger'>*Invalid Input</p>}
            </div>
            <div className="">
              <Button variant="contained" className='me-5' disabled={isinterest && isprincipal && israte?false:true} type='submit'>Calculate</Button >
              <Button  variant="outlined" color='error' onClick={reset}>Reset</Button>
            </div>
          </form>
        </div>
        <div className='col-md-4'></div>
      </div>
    </>
  )
}

export default App
