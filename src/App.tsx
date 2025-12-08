import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { GlobalStyles, PageTransition } from './components/GlobalStyles';
import { Home } from './pages/Home';
import { Writing } from './pages/Writing';
import { Article } from './pages/Article';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <PageTransition key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/writing/:slug" element={<Article />} />
      </Routes>
    </PageTransition>
  );
}

function App() {
  return (
    <HelmetProvider>
      <GlobalStyles />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
