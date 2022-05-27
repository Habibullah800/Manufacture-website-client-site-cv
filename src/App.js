import './App.css';
import Navbar from './Share/Navbar';
import Home from './Home/Home';
import { Route, Routes } from 'react-router-dom';
import PlaceOrder from './Home/PlaceOrder';
import Login from './userCreate/Login';
import Register from './userCreate/Register';
import AllTools from './Component/AllTools';
import AddReview from './Home/AddReview';



function App() {
  return (
    <div >

      <Navbar >
        <Routes>
          {/* <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route> */}
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='placeOrder' element={<PlaceOrder></PlaceOrder>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='register' element={<Register></Register>}></Route>
          <Route path='allTools' element={<AllTools></AllTools>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
        </Routes>
      </Navbar>



    </div>
  );
}

export default App;
