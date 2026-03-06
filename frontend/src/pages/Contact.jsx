import React from 'react';
import Parallax from '../components/Parallax';

export default function Contact() {
  return (
    <>
      <Parallax title="İletişim" height="40vh" />
      <section className="sec" style={{ minHeight: '50vh', padding: '100px 50px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Bize Ulaşın</h2>
        <div style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--container-color)', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => { e.preventDefault(); alert('Gönderildi'); }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Adınız Soyadınız</label>
              <input type="text" placeholder="Ad Soyad" required style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: '6px' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>E-posta Adresiniz</label>
              <input type="email" placeholder="ornek@mail.com" required style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: '6px' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Mesajınız</label>
              <textarea rows="5" placeholder="Mesajınızı buraya yazın..." required style={{ width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: '6px', resize: 'vertical' }}></textarea>
            </div>
            <button type="submit" style={{ background: 'var(--first-color)', color: 'white', padding: '15px', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Gönder</button>
          </form>
        </div>
      </section>
    </>
  );
}
