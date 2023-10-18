import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home'
import Profile from './pages/Profile';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}
