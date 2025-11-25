import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ShopGrid from './components/ShopGrid';
import ProductDetail from './components/ProductDetail';
import CartView from './components/CartView';
import AuthModal from './components/AuthModel';
import AdminDashboard from './components/AdminDashBoard.jsx';
import { getAllBooks } from './features/booksSlice.js';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); 
  const [cart, setCart] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.allBooks);
  const user = useSelector((state) => state.auth.user);

  // --- Fetch books on mount ---
  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  // --- Navigation handlers ---
  const handleNavClick = (view) => setCurrentView(view);
  const handleOpenLogin = () => setIsAuthOpen(true);
  const handleCloseLogin = () => setIsAuthOpen(false);

  // --- Cart Logic ---
  const addToCart = (book) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === book.id);
      if (existing) return prev.map(item => item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...prev, { ...book, quantity: 1 }];
    });
  };

  const removeFromCart = (bookId) => setCart(prev => prev.filter(item => item.id !== bookId));
  const updateQuantity = (bookId, delta) => setCart(prev => prev.map(item => item.id === bookId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item));

  // --- Book click handlers ---
  const handleBookClick = (book) => {
    setSelectedBook(book);
    setCurrentView('product');
    window.scrollTo(0,0);
  };
  const handleBackToShop = () => {
    setCurrentView('home');
    window.scrollTo(0,0);
  };

  const scrollToShop = () => {
    if(currentView !== 'home') setCurrentView('home');
    setTimeout(() => {
      const grid = document.getElementById('shop-grid');
      if(grid) grid.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // --- Admin view ---
  if(user?.role === 'admin') {
    return <AdminDashboard allBooks={books} />;
  }

  // --- Normal user view ---
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-gray-800 font-sans selection:bg-amber-100 selection:text-amber-900 flex flex-col no-scrollbar">
      <Navbar 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        onNavClick={handleNavClick} 
        onOpenLogin={handleOpenLogin}
      />

      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <HeroSection onBrowseClick={scrollToShop} />
            <ShopGrid 
              id="shop-grid"
              books={books} 
              onBookClick={handleBookClick} 
              onAddToCart={addToCart} 
            />
          </>
        )}

        {currentView === 'product' && selectedBook && (
          <ProductDetail 
            book={selectedBook} 
            onBack={handleBackToShop} 
            onAddToCart={addToCart} 
          />
        )}

        {currentView === 'cart' && (
          <CartView 
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            onCheckout={() => setIsAuthOpen(true)}
            onBrowse={handleBackToShop}
          />
        )}
      </main>

      <Footer />
      <AuthModal isOpen={isAuthOpen} onClose={handleCloseLogin} />
    </div>
  );
}
