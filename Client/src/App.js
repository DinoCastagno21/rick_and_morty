import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'
import { useState , useEffect } from 'react'
import { Routes, Route, useLocation , useNavigate } from "react-router-dom";


function App () {
  const navigate = useNavigate()
  const location = useLocation();
  const username = "dino_castagno@hotmail.com";
  const password = "termolar89"
  
  const [access,setAccess] = useState(false);
  const [characters,setCharacters] = useState([]);
  


const login = (userData) => {
  if(userData.username === username && userData.password === password){
    setAccess(true);
    navigate("/home");
  }  
}
useEffect(() => {
  !access && navigate('/');
}, [access, navigate]);

  //funcion que cierra las cartas 
 const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
 }
  //funcion que setea un estado (agrega cartas)
const onSearch = (character) => {
  fetch(`http://localhost:3001/rickandmorty/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
    });
}
//funcion carta random
const randomCard = () => {
  const id = Math.floor(Math.random()*826)
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
    });
}
  return (
    <div className='App'>
    {location.pathname !== "/" && <Nav onSearch={onSearch} randomCard={randomCard}/>}
      
        <Routes>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/home' element={<Cards characters={characters} onClose ={onClose}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route exact path='/' element={<Form login={login}/>}/>
          <Route path='/detail/:detailId' element={<Detail/>}/>
        </Routes>
    </div>
  )
}

export default App
