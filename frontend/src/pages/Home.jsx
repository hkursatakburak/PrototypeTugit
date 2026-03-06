import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';

import Parallax from '../components/Parallax';
import EventCard from '../components/EventCard';
import '../assets/css/about.css'; // Might need about css for 'sec' class
import '../assets/css/veribox.css';

export default function Home() {
  const latestEvents = [
    {
      title: "Zirve 23",
      subtitle: "2023 Sabancı Kültür Merkezi",
      image: "/images/zire resim kopyası.jpg",
      desc: "Girişimcilik ekosisteminin dev isimlerini ağırladığımız, tecrübe ve bilgi dolu bir zirve.",
      tags: ["Girişimcilik", "Tecrübe", "TÜGİT"],
      presenters: [
        {name: "Konuşmacı 1", image: "https://i.postimg.cc/jqgkqhSb/cast-11.jpg"}
      ]
    },
    {
      title: "İş Planı Atölyesi",
      subtitle: "Balkan Kongre Merkezi",
      image: "https://i.postimg.cc/GtxLYS7q/poster2-img.jpg",
      desc: "Fikirlerinizi nasıl hayata geçireceğinizi uygulamalı olarak öğrendiğimiz teknik iş planı eğitimi.",
      tags: ["Atölye", "Eğitim"],
      presenters: [
        {name: "Eğitmen 1", image: "https://i.postimg.cc/yY2QcYRp/cast-21.jpg"}
      ]
    },
    {
      title: "TÜGİT Tanışma Toplantısı",
      subtitle: "Girişimcilik Merkezi",
      image: "https://i.postimg.cc/pdjRc68d/img-02.png",
      desc: "Yeni dönemde aramıza katılan arkadaşlarımızla tanışma, vizyon paylaşımı ve ekip oyunları.",
      tags: ["Networking", "Tanışma"],
      presenters: [
        {name: "YK Üyesi", image: "https://i.postimg.cc/xd3twv4B/cast-31.jpg"}
      ]
    }
  ];

  return (
    <>
      {/* PARALLAX EN TEPEDE */}
      <Parallax title="Trakya'dan Yıldızlara" height="50vh" />

      {/* 3'LÜ KART (Seminer, Zirve, Eğitim) */}
      <div className="containerC" style={{marginTop: '20px'}}>
        <div className="card" style={{ '--clr': '#009688' }}>
          <div className="img-box"><img src="/images/zire resim kopyası.jpg" alt="Seminer" /></div>
          <div className="content">
            <h2>Seminerler</h2>
            <p>Alanında uzman isimlerin katılımıyla gerçekleşen seminerlerimizle girişimcilik ruhunu körüklüyor ve sektörün inceliklerini öğreniyoruz.</p>
            <Link to="/events">Daha Fazlası</Link>
          </div>
        </div>
        <div className="card" style={{ '--clr': '#FF3E7F' }}>
          <div className="img-box"><img src="https://i.postimg.cc/pdjRc68d/img-02.png" alt="Zirve" /></div>
          <div className="content">
            <h2>Zirveler</h2>
            <p>Her yıl geleneksel olarak düzenlediğimiz zirvelerle, Trakya bölgesindeki öğrencileri ulusal çapta projelere imza atan girişimcilerle buluşturuyoruz.</p>
            <Link to="/events">Daha Fazlası</Link>
          </div>
        </div>
        <div className="card" style={{ '--clr': '#03A9F4' }}>
          <div className="img-box"><img src="https://i.postimg.cc/26fms7F7/img-03.png" alt="Eğitim" /></div>
          <div className="content">
            <h2>Eğitimler</h2>
            <p>İş planı hazırlamadan şirket kurulum süreçlerine kadar girişimciliğin her adımını öğreten uygulamalı atölyeler ve eğitimler gerçekleştiriyoruz.</p>
            <Link to="/events">Daha Fazlası</Link>
          </div>
        </div>
      </div>

      {/* BİZ KİMİZ */}
      <section className="sec" style={{minHeight: '40vh'}}>
        <div className="custom-shape-divider-bottom-1701978624">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
        <img src="/images/loodertugit kopyası 2.png" alt="tugitadam" className="tugitadam" style={{maxWidth: '150px', display: 'block', margin: '0 auto'}} />
        <h2 style={{textAlign: 'center', marginTop: '20px'}}>Biz Kimiz</h2>
        <p style={{ textAlign: 'justify', maxWidth: '800px', margin: '20px auto', padding: '0 20px' }}>
          Trakya Üniversiteli Girişimciler Topluluğu (TÜGİT) olarak, bölgemizde ve üniversitemizde girişimcilik ekosistemini canlandırmak, inovatif fikirleri desteklemek ve öğrencileri profesyonel iş dünyasına hazırlamak amacıyla bir araya gelmiş dinamik bir öğrenci topluluğuyuz.
          <br /><br />
          Misyonumuz, yenilikçi düşünce yapısını teşvik ederek genç yeteneklere mentorluk sağlamak, atölyeler ve zirveler düzenleyerek onları alanında uzman kişilerle buluşturmaktır. Vizyonumuz ise, Trakya'dan çıkacak küresel ölçekli projelere kuluçka merkezi olmak ve yerel potansiyeli maksimize etmektir.
        </p>
      </section>

      {/* VERİLER (İSTATİSTİKLER) */}
      <div className="space" style={{padding: '50px 0', background: 'var(--container-color)'}}>
        <div className="veriler" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px', textAlign: 'center'}}>
          
          <div className="veri">
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <div ref={ref} style={{height: 100}}>
                  <h1 className="num" style={{fontSize: '3rem', color: 'var(--first-color)'}}>
                    {inView ? <CountUp end={2000} duration={2.5} /> : "0"}+
                  </h1>
                  <p>ÜYE</p>
                </div>
              )}
            </InView>
          </div>

          <div className="veri">
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <div ref={ref} style={{height: 100}}>
                  <h1 className="num" style={{fontSize: '3rem', color: 'var(--first-color)'}}>
                    {inView ? <CountUp end={5} duration={4} /> : "0"}
                  </h1>
                  <p>ZİRVE</p>
                </div>
              )}
            </InView>
          </div>

          <div className="veri">
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <div ref={ref} style={{height: 100}}>
                  <h1 className="num" style={{fontSize: '3rem', color: 'var(--first-color)'}}>
                    {inView ? <CountUp end={25} duration={4} /> : "0"}+
                  </h1>
                  <p>PROJE</p>
                </div>
              )}
            </InView>
          </div>

          <div className="veri">
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <div ref={ref} style={{height: 100}}>
                  <h1 className="num" style={{fontSize: '3rem', color: 'var(--first-color)'}}>
                    {inView ? <CountUp end={500} duration={3} /> : "0"}+
                  </h1>
                  <p>ETKİNLİK</p>
                </div>
              )}
            </InView>
          </div>

        </div>
      </div>

      {/* SON GELİŞMELER */}
      <div className="songelismeler" style={{padding: '50px 0'}}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }}>Son Gelişmeler & Etkinlikler</h2>
        <div className="wrapper" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          {latestEvents.map((evt, idx) => (
            <EventCard key={idx} {...evt} />
          ))}
        </div>
      </div>

    </>
  );
}
