import './CondForm.css';

function Condform(){
    return(
        <div className='form'>
        <input type='text' placeholder='Mobile Number or Email' id='phn-email'/>
        <input type='text' placeholder='Full Name' id='name'/>
        </div>
    );
}

export default Condform;