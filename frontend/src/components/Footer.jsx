import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <img src="/images/loodertugit kopyası 2.png" alt="logo" className="logof" />
          <p>
            Trakya Üniversitesi bünyesinde girişimcilik ruhunu aşılayan, projelere değer katan ve öğrencilere kariyer yollarında rehberlik eden öncü bir topluluğuz.
          </p>
        </div>
        <div className="col">
          <h3>Kurumsal <div className="underline"><span></span></div></h3>
          <ul>
            <li><Link to="/about" className="foa">Hakkımızda</Link></li>
            <li><br /></li>
            <li><Link to="/contact" className="foa">İletişim</Link></li>
            <li><br /></li>
            <li><Link to="#" className="foa">Gizlilik Politikası</Link></li>
          </ul>
        </div>
        <div className="col">
          <h3>Keşfet<div className="underline"><span></span></div></h3>
          <ul>
            <li><Link to="/blog" className="foa">Blog</Link></li>
            <li><br /></li>
            <li><Link to="/events" className="foa">Etkinliklerimiz</Link></li>
            <li><br /></li>
            <li><Link to="#" className="foa">Sıkça Sorulan Sorular</Link></li>
          </ul>
        </div>
        <div className="col">
          <h3>Bize Ulaşın<div className="underline"><span></span></div></h3>
          <form action="POST" onSubmit={(e) => { e.preventDefault(); alert('Kayıt Alındı'); }}>
            <i className="far fa-envelope"></i>
            <input type="email" placeholder="Mail adresini gir" required />
            <button type="submit"><i className="fas fa-arrow-alt-circle-right"></i></button>
          </form>
          <div className="social-icons">
            <i className="fa-brands fa-instagram" style={{ color: '#001e57' }}></i>
            <i className="fa-brands fa-facebook" style={{ color: '#001e57' }}></i>
            <i className="fa-brands fa-tiktok" style={{ color: '#001e57' }}></i>
            <i className="fa-brands fa-twitter" style={{ color: '#001e57' }}></i>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">&copy;2024 TÜ Girişimcilik</p>
    </footer>
  );
}
