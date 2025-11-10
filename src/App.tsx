import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';
import logo from './assets/images/Logo.jpg';

function App() {
    return (
        <div className="min-h-screen bg-[#F5F3F0]">
            <ScrollToTop />
            <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 shadow-sm">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between py-4 md:py-0 md:h-20 gap-4 md:gap-0">
                        <Link to="/" className="flex items-center">
                            <div className="content-center">
                                <img src={logo} alt="Logo" className="h-10 w-auto" />
                            </div>
                        </Link>
                        <div className="flex space-x-8">
                            <Link
                                to="/"
                                className="text-lg text-[#2D2D2D] hover:text-[#8B6F47] transition-colors relative group whitespace-nowrap"
                            >
                                <span>Home</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#8B6F47] transition-all group-hover:w-full"></span>
                            </Link>
                            <Link
                                to="/about"
                                className="text-lg text-[#2D2D2D] hover:text-[#8B6F47] transition-colors relative group whitespace-nowrap"
                            >
                                <span>Über uns</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#8B6F47] transition-all group-hover:w-full"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
