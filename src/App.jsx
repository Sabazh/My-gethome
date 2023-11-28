import './styles/globals.scss';
import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContextProvider from '@/context/AppContext';
import Home from '@/pages/Home';
import FlatDetail from '@/pages/FlatDetail';
import AddNote from './pages/AddNote';
import UserPage1 from './pages/UserPage1';
import UserPage2 from './pages/UserPage2';
import UserPage3 from './pages/UserPage3';
import UserPage4 from './pages/UserPage4';
import UserPage5 from './pages/UserPage5';
import UserPage6 from './pages/UserPage6';
import UserPage7 from './pages/UserPage7';
import UserPage8 from './pages/UserPage8';

function App() {
  return (
    <div className="bg-white-03">
      <BrowserRouter>
        <AppContextProvider>
          <div className="hidden sm:block">
            <Header />
          </div>

          <Routes>
            <Route index element={<Home />} />
            <Route path="/flats/:id" element={<FlatDetail />} />
            <Route path="/notes" element={<AddNote />} />
            <Route path="/userpage1" element={<UserPage1 />} />
            <Route path="/userpage2" element={<UserPage2 />} />
            <Route path="/userpage3" element={<UserPage3 />} />
            <Route path="/userpage4" element={<UserPage4 />} />
            <Route path="/userpage5" element={<UserPage5 />} />
            <Route path="/userpage6" element={<UserPage6 />} />
            <Route path="/userpage7" element={<UserPage7 />} />
            <Route path="/userpage8" element={<UserPage8 />} />
          </Routes>

          <Footer />
        </AppContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
