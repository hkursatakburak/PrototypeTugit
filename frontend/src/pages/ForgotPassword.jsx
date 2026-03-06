import React from 'react';
import { Link } from 'react-router-dom';
import Parallax from '../components/Parallax';

export default function ForgotPassword() {
  return (
    <>
      <Parallax title="Şifremi Unuttum" height="30vh" />
      <section className="sec" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px 20px' }}>
        <div style={{ width: '100%', maxWidth: '400px', background: 'var(--container-color)', padding: '40px', borderRadius: '12px', boxShadow: '0 8px 32px hsla(230, 75%, 15%, .1)' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'var(--title-color)' }}>Şifreni mi Unuttun?</h2>
          <p style={{ textAlign: 'center', marginBottom: '30px', fontSize: '0.95rem', color: '#666' }}>
            Aşağıdaki alana hesabına kayıtlı e-posta adresini girerek şifre sıfırlama bağlantısı talep edebilirsin.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); alert("Bağlantı Gönder Submit"); }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>E-posta Adresi</label>
              <input type="email" placeholder="ornek@mail.com" style={{ width: '100%', padding: '12px', border: '2px solid var(--border-color)', borderRadius: '6px' }} />
            </div>
            <button type="submit" style={{ background: 'var(--first-color)', color: 'white', padding: '15px', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
              Bağlantı Gönder
            </button>
            <div style={{ textAlign: 'center', marginTop: '15px', fontSize: '0.9rem' }}>
              Şifreni hatırladın mı? <Link to="/login" style={{ color: 'var(--first-color)', fontWeight: 'bold' }}>Giriş Yap</Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
