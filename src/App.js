import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SuccessMessage from './Components/SuccessMessage';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

function App() {
  return (
    
    <div className="">
     <Router>
        <Routes>
          <Route  path='/' element={<Form/>}></Route>
          <Route  path='/success' element={<SuccessMessage/>}></Route>
        </Routes>
        </Router>
     {/* <SuccessMessage/> */}
     
    </div>
   
     
  );
}

export default App;
