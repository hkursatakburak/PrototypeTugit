import React from 'react';
import Parallax from '../components/Parallax';
import '../assets/css/about.css'; // Includes existing styling

export default function About() {
  return (
    <>
      <Parallax title="Hakkımızda" />
      <section className="sec" style={{minHeight: '40vh', padding: '50px 20px'}}>
        <h2 style={{textAlign: 'center', marginBottom: '30px'}}>Vizyon ve Misyon</h2>
        <div style={{maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8'}}>
          <p>
            Trakya Üniversiteli Girişimciler Topluluğu (TÜGİT) olarak, bölgemizde ve üniversitemizde girişimcilik ekosistemini canlandırmak, inovatif fikirleri desteklemek ve öğrencileri profesyonel iş dünyasına hazırlamak amacıyla bir araya gelmiş dinamik bir öğrenci topluluğuyuz.
          </p>
          <br />
          <p>
            Misyonumuz, yenilikçi düşünce yapısını teşvik ederek genç yeteneklere mentorluk sağlamak, atölyeler ve zirveler düzenleyerek onları alanında uzman kişilerle buluşturmaktır.
          </p>
          <br />
          <p>
            Vizyonumuz ise, Trakya'dan çıkacak küresel ölçekli projelere kuluçka merkezi olmak ve yerel potansiyeli maksimize etmektir.
          </p>
        </div>
      </section>
    </>
  );
}
