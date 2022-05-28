import './App.css';
import Navbar from './Share/Navbar';
import Home from './Home/Home';
import { Route, Routes } from 'react-router-dom';
import PlaceOrder from './Home/PlaceOrder';
import Login from './userCreate/Login';
import Register from './userCreate/Register';
import AllTools from './Component/AllTools';
import AddReview from './Home/AddReview';
import NotFound from './Share/NotFound';
import MyPortfolio from './Component/MyPortfolio';
import Purchase from './Component/Purchase';
import Blog from './Home/Blog';



function App() {
  return (
    <div >

      <Navbar >
        <Routes>
          {/* <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route> */}
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path='placeOrder' element={<Purchase></Purchase>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='register' element={<Register></Register>}></Route>
          <Route path='allTools' element={<AllTools></AllTools>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='blog' element={<Blog></Blog>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </Navbar>



    </div>
  );
}

export default App;
