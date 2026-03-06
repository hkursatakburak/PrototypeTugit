import React from 'react';
import { Link } from 'react-router-dom';
import Parallax from '../components/Parallax';

export default function Login() {
  return (
    <>
      <Parallax title="Oturum Aç" height="30vh" />
      <section className="sec" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px 20px' }}>
        <div style={{ width: '100%', maxWidth: '400px', background: 'var(--container-color)', padding: '40px', borderRadius: '12px', boxShadow: '0 8px 32px hsla(230, 75%, 15%, .1)' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'var(--title-color)' }}>Giriş Yap</h2>
          <form onSubmit={(e) => { e.preventDefault(); alert("Login Submit"); }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Email</label>
              <input type="email" placeholder="ornek@mail.com" style={{ width: '100%', padding: '12px', border: '2px solid var(--border-color)', borderRadius: '6px' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Şifre</label>
              <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '12px', border: '2px solid var(--border-color)', borderRadius: '6px' }} />
            </div>
            <button type="submit" style={{ background: 'var(--first-color)', color: 'white', padding: '15px', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
              Giriş Yap
            </button>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px', fontSize: '0.9rem' }}>
              <Link to="/register" style={{ color: 'var(--first-color)', fontWeight: 'bold' }}>Hesap Oluştur</Link>
              <Link to="/forgot-password" style={{ color: 'var(--title-color)' }}>Şifremi Unuttum</Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
