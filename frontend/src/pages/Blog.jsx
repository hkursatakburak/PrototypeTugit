import React from 'react';
import Parallax from '../components/Parallax';

export default function Blog() {
  return (
    <>
      <Parallax title="Blog" height="40vh" />
      <section className="sec" style={{ minHeight: '50vh', padding: '100px 50px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Çok Yakında...</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', textAlign: 'center', color: '#555' }}>
          <p>Mevcut blog yazılarımız teknik altyapı çalışmalarımız kapsamında yakında buraya eklenecektir. Takipte kalın!</p>
        </div>
      </section>
    </>
  );
}
