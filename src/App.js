import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Header from './component/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './component/Main/Main';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/gitLink' element={<Main />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
