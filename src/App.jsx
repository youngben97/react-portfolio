// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
// import Header from './components/UI/Navbar';

function App () {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

//put navbar into header