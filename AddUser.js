/*ADDUSER INTERFACE WITH DATE SAVED LOCAL STORGAE */
import React, {useState,useEffect} from 'react';
import './App.css'

function AddUser () {
	const [data,setData] = useState([]);
	const [mobile,setMobile] = useState();
	const [isError, setIsError] = useState(false);

	const submitUser =(e)=>{
		e.preventDefault();
		let username = document.getElementById('username').value;
		let email = document.getElementById('email').value;
		let phone = document.getElementById('phone').value;
		let dob = document.getElementById('dob').value;
		let state = document.getElementById('state').value;

		let dataObj = {
			username:  username,
			email:email,
			phone:phone,
			dob:dob,
			state:state
		};

		localStorage.setItem('data',JSON.stringify(dataObj));
	}

	 useEffect(()=>{
	 	if (localStorage.getItem("data")){
	 		setData(JSON.parse(localStorage.getItem("data")))
	 	}
	 },[]);
	 
	return(
		<div>
		<center><form onSubmit={submitUser}>
		    <div className="Usrn">
		      <lable>Username</lable>  
		        <input type="text" className="Usrn" id="username" placeholder="User Name"  name="username"/>
		    </div>
		        <br/>

            <div className="Usrn">
		     <lable>Email</lable>
		        <input type="email" className="Usrn" id="email" placeholder="Email" name="email" />
		    </div>
		         <br/>

		    <div className="Usrn">
		      <lable>Phone</lable>
		        <input type="number" className="Usrn" id="phone" placeholder="Phone Number" name="phone" 
		   error={isError}
        value={mobile}
        label="Enter Phone Number"
        onChange={(e) => {
          setMobile(e.target.value);
          if (e.target.value.length > 10) {
            setIsError(true);
          }
      }}/>
      </div>
      <br/>
		
		<div className="Usrn">
		<lable>DOB</lable>
		
		  <input type="date"  className="Usrn"id="dob" placeholder="Date of birth" name="dob" /><br/>
        </div>

		<div className="Usrn">
		<lable>State</lable>
		
		  <select name="state" className="Usrn" id="state">
		<option value = "Select State">Select</option>
		<option value = "Rajasthan">Rajasthan</option>
		<option value = "karnataka">Karnataka</option>
		<option value = "Madhyapradesh">Madhyapradesh</option>
		<option value = "Maharashtra">Maharashtra</option>
		</select>
		</div>
		<br/>
		<div className="Usr">

		<button className="Usr">Add User </button>
		</div>
		</form></center>
		</div>
		)
};
export default AddUser;