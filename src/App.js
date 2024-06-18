import './App.css';
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import Signup from './components/Signup';
import Signin from './components/Signin';

function App() {
  return (
    <div>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Banner/>}  />
        <Route path='/signup' element={<Signup/>}  />
        <Route path='/signin' element={<Signin/>}  />
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
