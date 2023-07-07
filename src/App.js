import logo from './logo.svg';
import './App.css';
// import Form from './Components/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SuccessMessage from './Components/SuccessMessage';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Form2 from './Components/Form2';

function App() {
  return (
    
    <div className="">
     <Router>
        <Routes>
          {/* <Route  path='/' element={<Form/>}></Route> */}
          <Route  path='/' element={<Form2/>}></Route>
          <Route  path='/success' element={<SuccessMessage/>}></Route>
        </Routes>
        </Router>
     {/* <SuccessMessage/> */}
     
    </div>
   
     
  );
}

export default App;
