import logo from './logo.svg';
import './App.css';
import axios from"axios";
import {useEffect} from "react"; 
// import Productcomponent from './productcomponent';

function App() {
useEffect(async ()=>{
var response = await axios.get("http://localhost:3000/product/getproduct");
console.log(response);
},[])



  return (
    <div className="App">
      
<h1>abuj</h1>


     {/* <Productcomponent /> */}
    </div>
  );
}

export default App;
