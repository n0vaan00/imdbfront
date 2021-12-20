import React from 'react'
import axios from 'axios'
import './App.css';
import {useState} from 'react'


export default function App() {

  const url = 'http://localhost/imdbback/'
  const [name, setName] = useState('');
  const [searchterm, setSearchterm] = useState([]);
  const [gname, setGname] = useState('');
  const [genre, setGenre] = useState([]);
  const [role, setRole] = useState('');
  const [roles, setRoles] = useState([]);
 

  
  function getbyprhase(e) {

    e.preventDefault();    
    axios.get(url + 'searchbyterm.php/' + name)
    .then((response) => {
      const json = response.data;
      setSearchterm(json);
    }).catch (error => {
      if (error.response === undefined){
        alert(error);
      } else {
        alert(error.response.data.error);
      }
    })
  }
  function getgenre(e) {

    e.preventDefault();    
    axios.get(url + 'searchbygenre.php/' + gname)
    .then((response) => {
      const json = response.data;
      setGenre(json);
    }).catch (error => {
      if (error.response === undefined){
        alert(error);
      } else {
        alert(error.response.data.error);
      }
    })
  }

  function getroles(e) {

    e.preventDefault();    
    axios.get(url + 'searchbyrole.php/' + role)
    .then((response) => {
      const json = response.data;
      setRoles(json);
    }).catch (error => {
      if (error.response === undefined){
        alert(error);
      } else {
        alert(error.response.data.error);
      }
    })
  }


  return (
    <div className="container">
      <h2>Search movienames</h2>
      <div>
        <form onSubmit={getbyprhase}>
        <input className="form-control me-2" type="search" placeholder="Write something" aria-label="Search" 
        onChange={e => setName(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit" >Search</button>
        </form>
        </div>                                             
       <div>
        <ul>
        {searchterm.map(item => (
          <li>Movie: {item.primary_title}<br /> Genre: {item.genre}</li>       
        ))}                                                                                 
        </ul>
      </div> 

      <h2>Search by genre</h2>
      <div>
        <form onSubmit={getgenre}>
        <input className="form-control me-2" type="search" placeholder="Write genre" aria-label="Search" 
        onChange={e => setGname(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit" >Search</button>
        </form>
        </div>                                             
       <div>
        <ul>
        {genre.map(item => (
          <li>Movie: {item.primary_title}<br /> Genre: {item.genre}</li>       
        ))}                                                                                 
        </ul>
      </div> 

      <h2>Search roles by actors firstname</h2>
      <div>
        <form onSubmit={getroles}>
        <input className="form-control me-2" type="search" placeholder="First letter in uppercase" aria-label="Search" 
        onChange={e => setRole(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit" >Search</button>
        </form>
        </div>                                             
       <div>
        <ul>
        {roles.map(item => (
          <li>Actor: {item.name_}<br /> Role: {item.role_}</li>       
        ))}                                                                                 
        </ul>
      </div> 
    </div>
  )} 
