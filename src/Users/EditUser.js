import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { useHistory,useParams } from "react-router-dom";
export const EditUser = () => {
let history = useHistory();
const {id} = useParams();
const [user, setUser] = useState({
name: "",
username: "",
email: "",
phone: "",
website: "",
});
const { name, username, email, phone, website } = user;
const onInputChange = (e) => {
//console.log(e.target.value);
setUser({ ...user, [e.target.name]: e.target.value });
};
useEffect(()=>{
loadUser();
},[]);
const onSubmit = async e =>{
e.preventDefault();

//await axios.put(`http://localhost:3003/users/${id}`,user);
await axios.put(`http://localhost:1907/api/Users/${id}`,user);
history.push("/");
}
const loadUser = async()=>{
//const result = await axios.get(`http://localhost:3003/users/${id}`)
const result = await axios.get(`http://localhost:1907/api/Users/${id}`)
setUser(result.data);
}
return (
<div className="container">
<div className="w-75 mx-auto shadow p-5">
<h2 className="text-center mb-4">Edit A User</h2>
<form onSubmit={e=> onSubmit(e)}>
<div className="form-group">
<input
type="text"
className="form-control form-control-lg"
placeholder="Enter your Name"
name="name"
value={name}
onChange={(e) => onInputChange(e)}
/>
</div>
<div className="form-group">
<input
type="text"
className="form-control form-control-lg"
placeholder="Enter your Username"
name="username"
value={username}
onChange={(e) => onInputChange(e)}
/>
</div>
<div className="form-group">
<input
type="email"
className="form-control form-control-lg"
placeholder="Enter your E-mail Address"
name="email"
value={email}
onChange={(e) => onInputChange(e)}
/>
</div>
<div className="form-group">
<input
type="text"
className="form-control form-control-lg"
placeholder="Enter your Phone Number"
name="phone"
value={phone}
onChange={(e) => onInputChange(e)}
/>
</div>
<div className="form-group">
<input
type="text"
className="form-control form-control-lg"
placeholder="Enter your Website Name"
name="website"
value={website}
onChange={(e) => onInputChange(e)}
/>
</div>
<button className="btn btn-warning btn-block">Update User</button>
</form>
</div>
</div>
);
};