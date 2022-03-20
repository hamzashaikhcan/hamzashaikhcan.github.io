import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './Pages/Components/Footer';
import Header from './Pages/Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import PortfolioPage from './Pages/PortfolioPage';
import Contact from './Pages/Contact';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/about' element={<About />} />
				<Route exact path='/services' element={<Services />} />
				<Route exact path='/portfolio' element={<PortfolioPage />} />
				<Route exact path='/contact' element={<Contact />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
