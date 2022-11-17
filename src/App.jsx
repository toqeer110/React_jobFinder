import React from "react";
import { BrowserRouter,  Routes  , Route} from 'react-router-dom';
import Home from './Pages/Home.js';
import Navbar from './Components/Navbar.js';


const App = () => {

 return( 
  <>

<div className="container">


 <BrowserRouter>
      <Navbar></Navbar>
<Routes>
    <Route path="/" element={<Home />} exact ></Route>
</Routes>
 </BrowserRouter>

 </div>

</>
 );
}


export default App;