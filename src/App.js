import './App.css';
import {useState} from 'react';
import Condform from './components/CondForm/CondForm';

function App() {
  const[signup,setSignup]=useState(true);
  const[butValue,setButValue]=useState('Up');
  const[dontValue,setDontValue]=useState("");
  const[linkValue,setLinkValue]=useState("Log In");


  function signin_up(){
    setSignup(!signup);
    
    if(signup){
      setButValue('Up')
      setDontValue('');
      setLinkValue('Log In');
    }
    else{
      setButValue('In')
      setDontValue("Don't");
      setLinkValue("Sign Up");
    }
    
    
  }

  return(
    <div className='body'>
      <div className="logo">
        <img src='https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png' alt="logo"/>
      </div>
      <div className='form'>
        {(!signup) && <Condform/>}
        <input type='text' placeholder='Phone Number, username or email' id='userName'/>
        <input type='password' placeholder='Password' id='password'/>
      </div>
      <div className='button'>
        <button onClick={()=>signin_up()}>Sign <span className='up-in' id='up-in'>{butValue}</span> </button>
      </div>
      <div>
        <span className='dont' id='dont'>{dontValue}</span> have an account? <span className='links' id='links'>{linkValue}</span>
      </div>
    </div>
    
    



  )
  
}

export default App;
