import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
  loadUsers();
  }, []);
  const loadUsers = async () => {
  //const result = await axios.get("http://localhost:3003/users");
  
  const result = await axios.get("http://localhost:1907/api/Users");
  
  
  
  setUser(result.data.reverse());
  };

  const deleteUser= async id=>{
    //await axios.delete(`http://localhost:3003/users/${id}`);
     await axios.delete(`http://localhost:1907/api/Users/${id}`);
    loadUsers();

  };
  return (
  <div className="container">
  <div className="py-4">
  <h1>Home Page</h1>
  <table className="table border shadow">
  <thead className="table-dark">
  <tr>
  <th scope="col">#</th>
  <th scope="col">Name</th>
  <th scope="col">User Name</th>
  <th scope="col">Email</th>
  <th></th>
  </tr>
  </thead>
  <tbody>
  {
  users.map((user,index)=>(
  <tr><th scope="row">{index+1}</th>
  <td>{user.name}</td>
  <td>{user.username}</td>
  <td>{user.email}</td>
  <td>
  <Link className="btn btn-primary mr-2" exact to ={`/users/${user.id}`}>View</Link>
  <Link className="btn btn-outline-primary mr-2" exact to={`/users/edit/${user.id}`}>
  Edit</Link>
  <Link className="btn btn-danger" onClick={()=> deleteUser(user.id)}>Delete</Link>
  </td>
  </tr>
  ))
  }
  </tbody>
  </table>
  </div>
  </div>
  );
  };
  export default Home;