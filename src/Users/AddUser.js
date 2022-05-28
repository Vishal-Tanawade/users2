import React, { useState } from "react";
import axios, { Axios } from "axios";
import { useHistory } from "react-router-dom";
export const AddUser = () => {
let history = useHistory();
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
const onSubmit = async e =>{
    e.preventDefault();
await axios.post("http://localhost:3003/users",user);
history.push("/");
}
return (
<div className="container">
<div className="w-75 mx-auto shadow p-5">
<h2 className="text-center mb-4">Add A User</h2>
<form onSubmit={e=> onSubmit(e)}>
<div className="form-group">
<input
type="text"
className="form-control form-control-lg"
placeholder="Enter your Name"
name="name"
value={name}
onChange={(e) => onInputChange(e)}
required
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
required
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
required
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
required
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
required
/>
</div>
<button className="btn btn-primary btn-block">Add User</button>
</form>
</div>
</div>
);
};