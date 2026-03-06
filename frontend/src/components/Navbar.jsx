import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="header" id="header" style={{position: 'relative', marginTop: '20px', boxShadow: 'none', background: 'transparent'}}>
        <nav className="nav container target">
          <Link to="/" className="nav__logo target" style={{color: 'var(--first-color)'}}>TÜGİT</Link>

          <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link" onClick={() => setShowMenu(false)}>Anasayfa</Link>
              </li>
              <li className="nav__item">
                <Link to="/blog" className="nav__link" onClick={() => setShowMenu(false)}>Blog</Link>
              </li>
              <li className="nav__item">
                <Link to="/about" className="nav__link" onClick={() => setShowMenu(false)}>Hakkımızda</Link>
              </li>
              <li className="nav__item">
                <Link to="/events" className="nav__link" onClick={() => setShowMenu(false)}>Etkinliklerimiz</Link>
              </li>
              <li className="nav__item">
                <Link to="/contact" className="nav__link" onClick={() => setShowMenu(false)}>İletişim</Link>
              </li>
            </ul>

            <div className="nav__close" id="nav-close" onClick={() => setShowMenu(false)}>
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav__actions">
            {/* Search button */}
            <i className="ri-search-line nav__search" id="search-btn" onClick={() => setShowSearch(true)}></i>
            {/* Login button */}
            <i className="ri-user-line nav__login" id="login-btn" onClick={() => setShowLogin(true)}></i>
            {/* Toggle button */}
            <div className="nav__toggle" id="nav-toggle" onClick={() => setShowMenu(true)}>
              <i className="ri-menu-line"></i>
            </div>
          </div>
        </nav>
      </header>

      {/* SEARCH MODAL */}
      <div className={`search ${showSearch ? 'show-search' : ''}`} id="search">
        <form className="search__form">
          <i className="ri-search-line search__icon"></i>
          <input type="search" placeholder="Ne arıyorsun?" className="search__input" />
        </form>
        <i className="ri-close-line search__close" id="search-close" onClick={() => setShowSearch(false)}></i>
      </div>

      {/* LOGIN MODAL */}
      <div className={`login ${showLogin ? 'show-login' : ''}`} id="login">
        <form className="login__form" onSubmit={(e) => e.preventDefault()}>
          <h2 className="login__title">Giriş Yap</h2>
          
          <div className="login__group">
            <div>
              <label className="login__label">Email</label>
              <input type="email" placeholder="Email adresini gir" className="login__input" />
            </div>
            <div>
              <label className="login__label">Password</label>
              <input type="password" placeholder="Şifreni gir" className="login__input" />
            </div>
          </div>

          <div>
            <p className="login__signup">
              Hesabın yok mu? <Link to="/register" onClick={() => setShowLogin(false)}>Hesap Oluştur</Link>
            </p>
            <Link to="/forgot-password" className="login__forgot" onClick={() => setShowLogin(false)}>
              Şifremi Unuttum
            </Link>
            <button type="submit" className="login__button" onClick={() => {
              // Basic placeholder for login actions
              alert("Giriş Yapıldı (API Entegrasyonu beklemede)");
              setShowLogin(false);
            }}>Giriş</button>
          </div>
        </form>

        <i className="ri-close-line login__close" id="login-close" onClick={() => setShowLogin(false)}></i>
      </div>
    </>
  );
}
