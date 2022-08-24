import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import Navbar from './components/Navbar'
import Header from './components/Header'
import Explore from './pages/Explore'
import ForgotPassword from './pages/ForgotPassword'
import Offers from './pages/Offers'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Router>
      <Header />
      {/* <Navbar />*/}
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/profile' element={<SignIn />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
