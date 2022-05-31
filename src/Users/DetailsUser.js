import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export const DetailsUser = () => {
const [user, setUser] = useState({
name: "",
username: "",
email: "",
phone: "",
website: "",
});
const { id } = useParams();
useEffect(() => {
loadUser();
}, []);
const loadUser = async () => {
   
//const result = await axios.get(`http://localhost:3003/users/${id}`);
const result = await axios.get(` http://localhost:1907/api/Users/${id}`);
setUser(result.data);
};
return (
    <div className="container py-4">
<Link className="btn btn-primary" to="/">
back to Home
</Link>
<h1 className="display-4">User Id :{id}</h1>
<hr />
<ul className="list-group w-50">
<li className="list-group-item">name: {user.name}</li>
<li className="list-group-item">username: {user.username}</li>
<li className="list-group-item">email: {user.email}</li>
<li className="list-group-item">phone: {user.phone}</li>
<li className="list-group-item">website: {user.website}</li>
</ul>
</div>
);
};
